import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';

const employeesRoute = RouterModule.forRoot([{
  path: 'department/:id',
  component: DepartmentComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    employeesRoute
  ],
  declarations: [DepartmentComponent]
})
export class DepartmentModule { }
