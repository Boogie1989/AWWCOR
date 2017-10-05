
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export class DepartmentDataSource extends DataSource<any> {
  tableColumns = ['id', 'firstName', 'lastName', 'phone', 'salary', 'remove'];
  private _data: Observable<any>;

  connect(): Observable<any> {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  disconnect() { }
}
