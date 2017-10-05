export class Urls {
  protected base = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com';
  protected depatmentsGetPostUrl(): string {
    return `${this.base}/users/departments/`;
  }
  protected usersCountInDepartmentGetUrl(departmentId: string | number): string {
    return `${this.base}/users/employees/count/${departmentId}`;
  }
  protected employessGetPostUrl(): string {
    return `${this.base}/users/employees`;
  }
  protected employeeDeleteUrl(userId: string | number) {
    return `${this.base}/users/employees/${userId}`;
  }
  protected departmentGetDeleteUrl(departmentId: string | number) {
    return `${this.base}/users/departments/${departmentId}`;
  }

}
