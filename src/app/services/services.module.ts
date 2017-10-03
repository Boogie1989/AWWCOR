import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { DepartmentsService } from './departments.service';
import { EmployeesService } from './employees.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    BackendService,
    DepartmentsService,
    EmployeesService
  ],
  declarations: []
})
export class ServicesModule { }
