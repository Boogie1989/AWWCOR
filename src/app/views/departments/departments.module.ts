import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import {CdkTableModule} from '@angular/cdk/table';

const departmentsRoute = RouterModule.forRoot([{
  path: 'departments',
  component: DepartmentsComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    departmentsRoute
  ],
  declarations: [DepartmentsComponent]
})
export class DepartmentsModule { }
