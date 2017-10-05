import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { BackendService } from './backend.service';
import { Department } from '../models';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DetailsComponent, CreateComponent } from '../modules';

@Injectable()
export class DepartmentsService {

  private _departments: BehaviorSubject<Array<Department>> = new BehaviorSubject([]);
  private createComponent = CreateComponent;
  private detailsComponent = DetailsComponent;

  constructor(
    private backend: BackendService,
    public dialog: MdDialog
  ) { }

  get departments() {
    return this._departments.asObservable();
  }

  getAllDepartments() {
    this.backend.getAllDepartments()
      .subscribe(dep => this._departments.next(dep));
  }

  create(fields) {
    this.backend.createDepartment(fields)
      .subscribe((dep: Department) => {
        this._departments.next([...this._departments.getValue(), dep]);
      });
  }

  remove(element) {
    this.backend.removeDepartment(element.id)
      .subscribe(dep => this.removeDepartment(element.id));
  }

  showDetails(department) {
    const dialogRef = this.dialog.open(this.detailsComponent, {
      width: '500px',
      data: {
        title: 'Department details',
        department
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.create(result);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.createComponent, {
      width: '500px',
      data: {
        department: true,
        title: 'Create new Department'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.create(result);
      }
    });
  }

  getDepartmentById(departmentId: number) {
    const departments = this._departments.getValue();
    return departments.find(d => d.id === departmentId);
  }

  recountEmployees(departmentId: number, recount: number) {
    const departments = this._departments.getValue();
    for (let i = 0; i < departments.length; i++) {
      if (departments[i].id === departmentId) {
        if (!departments[i].count) {
          departments[i].count = 0;
        }
        departments[i].count += recount;
        return this._departments.next(departments);
      }
    }
  }

  getDepartmentAsync(departmentId: number) {
    return Observable.create(observer => {
      this._departments.subscribe(deps => {
        const department = this.getDepartmentById(departmentId);
        if (department) {
          observer.next(department);
        }
      });
    });
  }

  private removeDepartment(id) {
    const departments = this._departments.getValue();
    for (let i = 0; i < departments.length; i++) {
      if (departments[i].id === id) {
        departments.splice(i, i);
        return this._departments.next(departments);
      }
    }
  }

}
