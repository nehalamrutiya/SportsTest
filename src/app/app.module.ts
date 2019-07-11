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
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    SportsTestComponent,
    DialogBoxComponent,
    SportsTestFormComponent,
    SportsTestDetailComponent,
    AthleteAddFormComponent,
    NavHeaderComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent],
})
export class AppModule { }
