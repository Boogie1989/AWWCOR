import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BackendService } from './backend.service';
import { Department } from '../models';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { EditComponent, DetailsComponent } from '../modules';

@Injectable()
export class DepartmentsService {

  private _departments: BehaviorSubject<Array<Department>> = new BehaviorSubject([]);
  private editComponent = EditComponent;
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
    const dialogRef = this.dialog.open(this.editComponent, {
      width: '500px',
      data: {
        fieldsForEdit: [{
          name: 'name',
          description: 'Enter department name'
        }, {
          name: 'description',
          description: 'Enter description for department'
        }],
        title: 'Create new Department'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.create(result);
      }
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
