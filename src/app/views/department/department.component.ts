import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  subscription: Array<Subscription> = [];
  departmentName: string;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        const sub: Subscription = this.employeesService.allEmployees
          .subscribe(emps => {
            const filtered = this.employeesService.filterSelectedEmployee(emps, Number(params.id));
            if (filtered.length) {
              this.departmentName = filtered[0].departmentName;
            }
          });
        this.subscriptions.push(sub);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
