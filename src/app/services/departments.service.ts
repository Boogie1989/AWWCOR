import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BackendService } from './backend.service';
import { Department } from '../models';

@Injectable()
export class DepartmentsService {

  private _departments: BehaviorSubject<Array<Department>> = new BehaviorSubject([]);

  constructor(
    private backend: BackendService
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
