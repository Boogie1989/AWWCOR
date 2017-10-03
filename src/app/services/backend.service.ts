import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Department, Employee } from '../models';
import { Urls } from '../config';

@Injectable()
export class BackendService extends Urls {

  constructor(
    private http: Http
  ) {
    super();
  }

  getAllDepartments(): Observable<Array<Department>> {
    return this.http.get(this.depatmentsGetPostUrl())
      .map(res => res.json())
      .map(res => res.map(d => new Department(d)))
      .do(dep => {
        dep.map(d => {
          this.http.get(this.usersCountInDepartmentGetUrl(d.id))
            .map(res => res.json())
            .subscribe(res => {
              d.count = res.count;
            },
            error => console.log(error));
        });
      })
      .catch(this.errorHandler);
  }

  getAllEmployees(): Observable<Array<Employee>> {
    return this.http.get(this.employessGetUrl())
      .map(res => res.json())
      .map(res => res.map(d => new Employee(d)))
      .catch(this.errorHandler);
  }

  createDepartment(fields): Observable<Department> {
    return this.http.post(this.depatmentsGetPostUrl(), fields)
      .map(res => new Department(res.json()));
  }

  removeDepartment(id) {
    return this.http.delete(this.departmentGetDeleteUrl(id))
      .map(res => res.json());
  }


  private errorHandler(error) {
    console.log(error);
    return Observable.of([]);
  }

}
