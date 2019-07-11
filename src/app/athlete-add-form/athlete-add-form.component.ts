import { Component, OnInit,Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AthleteAddService } from './athlete-add.service';
import { SportsTestService } from '../sports-test/sports-test.service';
import { UserService } from '../shared/user/user.service';
import { AthleteAdd } from './athlete-add';
import { User } from '../shared/user/user';
import { TokenStorage } from '../shared/authentication/token-storage.service';
import { EnvironmentService } from "../shared/environment/environment.service";
import { AuthenticationService } from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-athlete-add-form',
  templateUrl: './athlete-add-form.component.html',
  styleUrls: ['./athlete-add-form.component.css'],
  providers:[UserService,SportsTestService,AthleteAddService,TokenStorage,EnvironmentService,AuthenticationService]
})
export class AthleteAddFormComponent implements OnInit {

    users : User;
    response;
    submitted = false; 
    deleted = false;
    @Input('TestId') TestId: number;
    @Input('AthleteId') AthleteId: number;
    @Input('DialogType') DialogType: string;
    model : AthleteAdd;

    constructor( private AthleteAddService: AthleteAddService,
                 private UserService: UserService,
                 private SportsTestService: SportsTestService,
                 public dialog: MatDialog,
                 public EnvService : EnvironmentService,
                 public AuthService: AuthenticationService,
                 public dialogRef: MatDialogRef<DialogBoxComponent>
               ) { }

   
    ngOnInit() {
        this.model = new AthleteAdd(0,0,0);
        if(this.DialogType == "editAthlete"){
            this.getAthleteById(this.AthleteId);
        }
        this.getUsers();
    }
    
    onSubmit() { 
        if(this.DialogType == "addAthlete"){
            this.model.test_id = this.TestId;
            this.AthleteAddService.addAthlete(this.model).subscribe(res => { 
                this.response = res.body;
                this.submitted = true; 
                this.dialogRef.close();
                window.location.reload();
              },
              err => {
                console.log(err);
              }
            );
        }else if(this.DialogType == "editAthlete"){
            this.AthleteAddService.editAthleteById(this.model,this.AthleteId).subscribe(res => { 
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
    }

    onDeleteSubmit(){
        if(this.DialogType == "deleteAthlete"){
            this.AthleteAddService.deleteAthleteById(this.AthleteId).subscribe(res => { 
                this.deleted = true;
                this.dialogRef.close();
                window.location.reload(); 
              },
              err => {
                console.log(err);
              }
            );
        }else if(this.DialogType == "deleteSportsTest"){
            this.SportsTestService.deleteSportsTest(this.TestId).subscribe(res => { 
                this.deleted = true;
                this.dialogRef.close();
                window.location.reload();
              },
              err => {
                console.log(err);
              }
            );
        }
    }
    
    getUsers(): void {
        this.UserService.getUsers().subscribe(
        data => { 
                this.users = data;
                console.log(this.users);
            }
        );
    }
    
    getAthleteById(id:number): void {
            this.AthleteAddService.getAthleteById(id).subscribe(
                (data:any) => { 
                    this.model = data.data;
                }
            );
        }
    
    openDialog(Type:string): void {
       const dialogConfig = new MatDialogConfig();
       
        dialogConfig.data = {
            Type: Type,
            AthleteId: this.AthleteId, 
            width: '250px'
        };
   
        const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        }); 
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
