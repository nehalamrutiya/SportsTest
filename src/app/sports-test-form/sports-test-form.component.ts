import { Component, OnInit } from '@angular/core';
import { SportsTestType } from '../sports-test-type';
import { SportsTestAdd } from '../sports-test-add';
import { SportsTestTypeService } from '../sports-test-type.service';
import { SportsTestService } from '../sports-test.service';

@Component({
  selector: 'app-sports-test-form',
  templateUrl: './sports-test-form.component.html',
  styleUrls: ['./sports-test-form.component.css'],
  providers:[SportsTestTypeService,SportsTestService]
})
export class SportsTestFormComponent implements OnInit {

    sportstesttype : SportsTestType;
    submitted = false;
    response;
  
    model = new SportsTestAdd(1,"dd-mm-yyyy");
   
    constructor( private SportsTestTypeService: SportsTestTypeService,
                 private SportsTestService: SportsTestService ) { }

    ngOnInit() {
        this.getSportsTestType();
    }
  
    onSubmit() { 
        this.SportsTestService.addSports(this.model).subscribe(res => { 
            this.response = res.body;
            this.submitted = true; 
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
