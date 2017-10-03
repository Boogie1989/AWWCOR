import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const employeesRoute = RouterModule.forRoot([{
  path: 'employees',
  component: EmployeesComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    employeesRoute
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule { }
