import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from '../models';

@Injectable()
export class EmployeesService {

  private _allEmployees: BehaviorSubject<Array<Employee>> = new BehaviorSubject([]);
  private _selectedEmployees: BehaviorSubject<Array<Employee>> = new BehaviorSubject([]);

  selectedEmployeeDepartmentId: number;

  constructor(
    private backend: BackendService
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

}
