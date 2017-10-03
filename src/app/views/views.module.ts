import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsModule } from './departments';
import { DepartmentModule } from './department';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    DepartmentModule
  ],
  declarations: []
})
export class ViewsModule { }
