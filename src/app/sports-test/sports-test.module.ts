import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxModule } from '../dialog-box/dialog-box.module';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component'; 

@NgModule({
  declarations: [DialogBoxComponent],
  exports: [DialogBoxComponent],
  imports: [
    CommonModule,DialogBoxModule
  ]
})
export class SportsTestModule { }
