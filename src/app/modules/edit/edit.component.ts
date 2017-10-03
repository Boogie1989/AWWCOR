import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form = {};

  constructor(
    public dialogRef: MdDialogRef<EditComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onClick(type: 'ok' | 'close'): void {
    if (type === 'ok') {
      this.dialogRef.close(this.form);
    } else {
      this.dialogRef.close();
    }
  }

}
