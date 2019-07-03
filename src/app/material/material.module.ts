import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule
    ]
})
export class MaterialModule { }