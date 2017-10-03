import { Component } from '@angular/core';
import { DepartmentsService, EmployeesService } from './services';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(
    private departmentsService: DepartmentsService,
    private employeesService: EmployeesService,
  ) {
    this.departmentsService.getAllDepartments();
    this.employeesService.getAllEmployees();
  }
}
