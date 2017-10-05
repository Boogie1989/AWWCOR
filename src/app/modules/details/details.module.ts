import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatFormFieldModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  entryComponents: [
    DetailsComponent
  ],
})
export class DetailsModule { }
