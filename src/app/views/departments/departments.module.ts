import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { MatTableModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { EditModule, DetailsModule } from '../../modules';

const departmentsRoute = RouterModule.forRoot([{
  path: 'departments',
  component: DepartmentsComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
    MatDialogModule,
    EditModule,
    DetailsModule,
    departmentsRoute
  ],
  declarations: [DepartmentsComponent]
})
export class DepartmentsModule { }
