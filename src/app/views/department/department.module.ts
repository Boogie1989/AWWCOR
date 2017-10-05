import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

const employeesRoute = RouterModule.forRoot([{
  path: 'department/:id',
  component: DepartmentComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    employeesRoute,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [DepartmentComponent]
})
export class DepartmentModule { }
