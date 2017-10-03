
export interface IDepartment {
  id: number;
  name: string;
  description: string;
}


export class Department implements IDepartment {
  id: number;
  name: string;
  description: string;
  constructor(
    opt: IDepartment
  ) {
    this.id = opt.id;
    this.name = opt.name;
    this.description = opt.description;
  }
}
