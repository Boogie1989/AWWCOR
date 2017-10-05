import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form = {};

  constructor(
    public dialogRef: MdDialogRef<CreateComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onClick(type: 'ok' | 'canvel') {
    if (type === 'ok') {
      if (this.data.form) {
        this.form = Object.assign(this.form, this.data.form);
      }
      this.dialogRef.close(this.form);
    } else {
      this.dialogRef.close();
    }

  }

}
