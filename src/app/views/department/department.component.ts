import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DepartmentDataSource } from './dataSource';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit, OnDestroy {

  dataSource = new DepartmentDataSource();
  subscriptions: Array<Subscription> = [];
  subscription: Array<Subscription> = [];
  departmentName: string;
  departmentId: number;

  constructor(
    public employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {
    this.dataSource.data = this.employeesService.selectedEmployees;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.departmentId = Number(params.id);
        this.findDepartmentName(this.departmentId);
        const sub: Subscription = this.employeesService.allEmployees
          .subscribe(emps => {
            this.employeesService.filterSelectedEmployee(emps, this.departmentId);
          });
        this.subscriptions.push(sub);
      }
    });
  }

  private findDepartmentName(departmentId) {
    const sub = this.employeesService.getDepartmentByIdAsync(departmentId)
      .subscribe(dep => {
        this.departmentName = dep.name;
      });
    this.subscription.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
