import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Department } from '../models';

@Injectable()
export class BackendService {

  constructor(
    private http: Http
  ) { }

  getDepartments(): Observable<Array<Department>> {
    return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/')
      .map(res => res.json())
      .map(res => res.map(d => new Department(d)))
      .catch(error => {
        console.log(error);
        return Observable.of([]);
      });
  }

}
