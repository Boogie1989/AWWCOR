import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsModule } from './departments';
import { EmployeesModule } from './employees';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    EmployeesModule
  ],
  declarations: []
})
export class ViewsModule { }
