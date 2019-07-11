import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { SportsTestType } from '../shared/sports-test-type/sports-test-type';
import { SportsTestAdd } from '../shared/sports-test-add/sports-test-add';
import { SportsTestTypeService } from '../shared/sports-test-type/sports-test-type.service';
import { SportsTestService } from '../sports-test/sports-test.service';
import { EnvironmentService } from "../shared/environment/environment.service";
import { AuthenticationService } from './../shared/authentication/authentication.service';
import { TokenStorage } from '../shared/authentication/token-storage.service';

@Component({
  selector: 'app-sports-test-form',
  templateUrl: './sports-test-form.component.html',
  styleUrls: ['./sports-test-form.component.css'],
  providers:[SportsTestTypeService,SportsTestService,EnvironmentService,AuthenticationService,TokenStorage]
})
export class SportsTestFormComponent implements OnInit {

    sportstesttype : SportsTestType;
    submitted = false;
    response;
  
    model = new SportsTestAdd(1,"dd-mm-yyyy");
   
    constructor( private SportsTestTypeService: SportsTestTypeService,
                 private SportsTestService: SportsTestService,
                 public EnvironmentService : EnvironmentService,
                 public AuthService: AuthenticationService,
                 public dialogRef: MatDialogRef<DialogBoxComponent> ) { }

    ngOnInit() {
        this.getSportsTestType();
    }
  
    onSubmit() { 
        this.SportsTestService.addSports(this.model).subscribe(res => { 
            this.response = res.body;
            this.submitted = true; 
            this.dialogRef.close();
            window.location.reload();
          },
          err => {
            console.log(err);
          }
        );
    }
    
    getSportsTestType(): void {
        this.SportsTestTypeService.getSportsTestType().subscribe(
        data => { 
                this.sportstesttype = data;
                console.log(this.sportstesttype);
            }
        );
    }

}
