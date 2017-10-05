import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<CreateComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    console.dir(Validators);

    let form = {};
    if (this.data.department) {
      form = {
        name: ['', Validators.required],
        description: ['', Validators.required]
      };
    } else if (this.data.employee) {
      form = {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [null, Validators.required],
        salary: [null, Validators.required]
      };
    }
    this.form = this.fb.group(form);
  }

  onSubmit(value) {
    if (this.form.valid) {
      if (this.data.form) {
        value = Object.assign(value, this.data.form);
      }
      return this.dialogRef.close(value);
    }

    this.snackBar.open('All fields are required!', 'Error', {
      duration: 1500,
    });

  }

  close() {
    this.dialogRef.close();
  }

}
