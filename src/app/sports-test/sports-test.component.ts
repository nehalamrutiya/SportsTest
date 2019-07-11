import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { SportsTest } from './sports-test';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import { SportsTestService } from './sports-test.service';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { TokenStorage } from '../shared/authentication/token-storage.service';
import { EnvironmentService } from "../shared/environment/environment.service";

@Component({
  selector: 'app-sports-test',
  templateUrl: './sports-test.component.html',
  styleUrls: ['./sports-test.component.css'],
  providers:[SportsTestService,AuthenticationService,TokenStorage,EnvironmentService]
})
export class SportsTestComponent implements OnInit {
    Type: string;
    sports: SportsTest;
    @Input('TestId') TestId: number;
    @Input('DialogType') DialogType: string;
    coach: boolean;
    auth: boolean;
  
  constructor(
    private SportsTestService: SportsTestService,
    public dialog: MatDialog,
    public AuthService: AuthenticationService,
    public EnvironmentService : EnvironmentService,
    private router: Router,
    ) { }

  ngOnInit() {
      this.AuthService.isAuthorized().subscribe(
      (res) => {
            this.auth = res;
	  }
      );
      if(!this.auth){
          this.router.navigateByUrl('login');
      }else{
        this.getSports();
        this.isCoach();
      }
  }
  
  isCoach(): void {
      this.AuthService.isCoach().subscribe(
      (res:any) => { 
            this.coach = res.data;
	  }
      );
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
    if(Type == 'addSportsTest'){
        dialogConfig.data = {
            Type: Type,
            width: '250px'
        };
    }
    else if(Type == 'deleteSportsTest'){
        dialogConfig.data = {
            Type: Type,
            TestId: this.TestId, 
            width: '250px'
        };
    }
    const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
