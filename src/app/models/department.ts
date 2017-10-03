
export interface IDepartment {
  id: number;
  name: string;
  description: string;
}


export class Department implements IDepartment {
  id: number;
  name: string;
  description: string;
  private _count: number;
  constructor(
    opt: IDepartment
  ) {
    this.id = opt.id;
    this.name = opt.name;
    this.description = opt.description;
  }

  set count(count: number) {
    this._count = count;
  }

  get count(): number {
    return this._count;
  }
}
