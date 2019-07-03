import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SportsTestFormComponent } from '../sports-test-form/sports-test-form.component';

export interface DialogData {
  Type: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

    DialogType : string;
    TestId : number;
    AthleteId : number;
    
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        
        if(data.Type == 'addAthlete') {
            this.DialogType = data.Type;
            this.TestId = data.TestId;
        }else if(data.Type == 'editAthlete') {
            this.DialogType = data.Type;
            this.AthleteId = data.AthleteId;
        }else if(data.Type == 'deleteAthlete'){
            this.DialogType = data.Type;
            this.AthleteId = data.AthleteId;
        }
   }

  ngOnInit() {
      
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
