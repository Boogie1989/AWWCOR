import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services';
import { Department } from '../../models';
import { DepartmentsDataSource } from './dataSource';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  dataSource = new DepartmentsDataSource();

  constructor(
    public departmentsService: DepartmentsService
  ) {
    this.dataSource.data = this.departmentsService.departments;
  }

  ngOnInit() { }

}

