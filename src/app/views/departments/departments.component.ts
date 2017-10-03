import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services';
import { Department } from '../../models';
import { DepartmentsDataSource } from './dataSource';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { EditComponent } from '../../modules';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  dataSource = new DepartmentsDataSource();
  edit: any = EditComponent;
  constructor(
    private departmentsService: DepartmentsService,
    public dialog: MdDialog
  ) {
    this.dataSource.data = this.departmentsService.departments;
  }

  ngOnInit() { }

  openDialog(): void {
    let dialogRef = this.dialog.open(this.edit, {
      width: '500px',
      data: {
        fieldsForEdit: [{
          name: 'name',
          description: 'Enter department name'
        }, {
          name: 'description',
          description: 'Enter description for department'
        }],
        title: 'Create new Department'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.departmentsService.create(result);
      }
    });
  }

}

