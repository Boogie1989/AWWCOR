
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export class DepartmentsDataSource extends DataSource<any> {
  tableColumns = ['id', 'name', 'description', 'employeeCount', 'details', 'remove'];
  private _data: Observable<any>;

  connect(): Observable<any> {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  disconnect() { }
}
