import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Employee, IEmployee } from '../models';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import {  CreateComponent } from '../modules';
import { DepartmentsService } from './departments.service';

@Injectable()
export class EmployeesService {

  private _allEmployees: BehaviorSubject<Array<Employee>> = new BehaviorSubject([]);
  private _selectedEmployees: BehaviorSubject<Array<Employee>> = new BehaviorSubject([]);
  private createComponent = CreateComponent;

  selectedEmployeeDepartmentId: number;

  constructor(
    private backend: BackendService,
    private departmentsService: DepartmentsService,
    public dialog: MdDialog
  ) { }

  get allEmployees() {
    return this._allEmployees.asObservable();
  }

  get selectedEmployees() {
    return this._selectedEmployees.asObservable();
  }

  getAllEmployees() {
    this.backend.getAllEmployees()
      .subscribe(emp => this._allEmployees.next(emp));
  }

  filterSelectedEmployee(employees, selectedEmployeeDepartmentId: number) {
    const selecterEployees = employees.filter(e => e.departmentId === selectedEmployeeDepartmentId);
    if (selecterEployees) {
      this._selectedEmployees.next(selecterEployees);
      return selecterEployees;
    }
  }

  addNewEmployee(departmentId: number) {

    const department = this.departmentsService.getDepartmentById(departmentId);

    const dialogRef = this.dialog.open(this.createComponent, {
      width: '500px',
      data: {
        employee: true,
        form: {
          departmentId: department.id,
          departmentName: department.name
        },
        title: 'Create new Employee'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.create(result);
      }
    });
  }

  create(employeeFields) {
    this.backend.createEmployee(employeeFields)
      .subscribe(emp => {
        this._allEmployees.next(this._allEmployees.getValue().concat([emp]));
        this.departmentsService.recountEmployees(emp.departmentId, 1);
      });
  }

  remove(employee: Employee) {
    this.backend.removeEmployee(employee.id)
      .subscribe(res => this.removeEmployeeFrommStore(employee.id));
  }

  private removeEmployeeFrommStore(id) {
    const removeAndEmmit = (employees, idForRemove, observable) => {
      if (!employees || !employees.length) {
        return;
      }
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === idForRemove) {
          this.departmentsService.recountEmployees(employees[i].departmentId, -1);
          employees.splice(i, 1);
          return observable.next(employees);
        }
      }
    };
    removeAndEmmit(this._allEmployees.getValue(), id, this._allEmployees);
    removeAndEmmit(this._selectedEmployees.getValue(), id, this._selectedEmployees);

  }

}
