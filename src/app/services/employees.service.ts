import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable()
export class EmployeesService {

  constructor(
    private backend: BackendService
  ) { }

  write(text) {

  }

}
