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

}
