import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services';
import { Department } from '../../models';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit() {
    this.departmentsService.getDepartments();
    this.departmentsService.departments
      .subscribe((dep: Array<Department>) => {
        console.log(dep);
      });
  }

}
