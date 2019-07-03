import { Component, OnInit } from '@angular/core';
import { SportsTest } from '../sports-test';
import { SportsTestService } from '../sports-test.service';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-sports-test',
  templateUrl: './sports-test.component.html',
  styleUrls: ['./sports-test.component.css'],
  providers:[SportsTestService]
})
export class SportsTestComponent implements OnInit {
    Type: string;
    sports: SportsTest;
  
  constructor(
    private SportsTestService: SportsTestService,public dialog: MatDialog
    ) { }

  ngOnInit() {
      this.getSports();
  }
  
  getSports(): void {
      this.SportsTestService.getSports().subscribe(
      data => { 
	      this.sports = data;
              console.log(data);
	  }
      );
  }
  
openDialog(Type:string): void {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
        Type: Type,
        width: '250px'
    };
    
    const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
