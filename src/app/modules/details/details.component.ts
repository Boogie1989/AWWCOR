import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DetailsComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
