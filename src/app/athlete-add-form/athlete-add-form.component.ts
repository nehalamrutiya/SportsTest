import { Component, OnInit,Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AthleteAddService } from '../athlete-add.service';
import { UserService } from '../user.service';
import { AthleteAdd } from '../athlete-add';
import { User } from '../user';

@Component({
  selector: 'app-athlete-add-form',
  templateUrl: './athlete-add-form.component.html',
  styleUrls: ['./athlete-add-form.component.css'],
  providers:[AthleteAddService]
})
export class AthleteAddFormComponent implements OnInit {

    users : User;
    response;
    submitted = false; 
    @Input('TestId') TestId: number;
    @Input('AthleteId') AthleteId: number;
    @Input('DialogType') DialogType: string;
    model : AthleteAdd;

    constructor( private AthleteAddService: AthleteAddService,
                 private UserService: UserService,
                 public dialog: MatDialog
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
              },
              err => {
                console.log(err);
              }
            );
        }else if(this.DialogType == "editAthlete"){
            this.AthleteAddService.editAthleteById(this.model,this.AthleteId).subscribe(res => { 
                this.response = res.body;
                this.submitted = true; 
              },
              err => {
                console.log(err);
              }
            );
        }
    }

    onDeleteSubmit(){
        this.AthleteAddService.editAthleteById(this.model,this.AthleteId).subscribe(res => { 
                this.response = res.body;
                this.submitted = true; 
              },
              err => {
                console.log(err);
              }
        );
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
        data => { 
                this.model = data.data;
            }
        );
    }
    
    openDialog(Type:string): void {
       console.log(Type);
       console.log(this.AthleteId);
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
}
