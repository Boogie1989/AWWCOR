import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.employeesService.write('employeesService');
  }

}
