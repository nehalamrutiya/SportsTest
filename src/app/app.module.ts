import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SportsTestComponent } from './sports-test/sports-test.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SportsTestFormComponent } from './sports-test-form/sports-test-form.component';
import { SportsTestDetailComponent } from './sports-test-detail/sports-test-detail.component';
import { AthleteAddFormComponent } from './athlete-add-form/athlete-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsTestComponent,
    DialogBoxComponent,
    SportsTestFormComponent,
    SportsTestDetailComponent,
    AthleteAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent],
})
export class AppModule { }
