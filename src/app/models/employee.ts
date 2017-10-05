
export interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  salary: number;
  departmentId: number;
  departmentName: string;
}

export class Employee implements IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  salary: number;
  departmentId: number;
  departmentName: string;

  constructor(
    opt: IEmployee
  ) {
    this.id = opt.id;
    this.firstName = opt.firstName;
    this.lastName = opt.lastName;
    this.phone = opt.phone;
    this.salary = opt.salary;
    this.departmentId = opt.departmentId;
    this.departmentName = opt.departmentName;
  }

}
