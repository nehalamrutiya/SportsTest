import { Component, OnInit } from '@angular/core';
import { SportsTestDetail } from '../sports-test-detail';
import { SportsTestDetailService } from '../sports-test-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-sports-test-detail',
  templateUrl: './sports-test-detail.component.html',
  styleUrls: ['./sports-test-detail.component.css'],
  providers:[SportsTestDetailService]
})
export class SportsTestDetailComponent implements OnInit {

  constructor(private SportsTestDetailService: SportsTestDetailService,
  private route: ActivatedRoute,public dialog: MatDialog) { }

    sportsdetail : SportsTestDetail;
    public sport_test_id;
    
  ngOnInit() {
      let sport_id = this.route.snapshot.paramMap.get('sportId');
      //let athlete_id = this.route.snapshot.paramMap.get('athleteId');

      this.sport_test_id = sport_id;
      
      this.getSportsTestDetail(parseInt(sport_id));
      //this.editSportsAthleteDetail(parseInt(athlete_id));
  }
  
  getSportsTestDetail(id:number): void {
      this.SportsTestDetailService.getSportsDetail(id).subscribe(
      data => { 
	      this.sportsdetail = data;
              console.log("after assignment");
              console.log(this.sportsdetail);
	  }
      );
  }
   
   openDialog(Type:string,athlete_id:number): void {
       console.log(athlete_id);
    const dialogConfig = new MatDialogConfig();
    
    if(Type == 'addAthlete'){
        dialogConfig.data = {
            Type: Type,
            TestId: this.sport_test_id, 
            width: '250px'
        };
    }else if(Type == 'editAthlete'){
        dialogConfig.data = {
            Type: Type,
            AthleteId: athlete_id,
            width: '250px',
        };
    }
    
    const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
