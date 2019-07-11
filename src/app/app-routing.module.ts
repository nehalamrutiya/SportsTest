import { NgModule } from '@angular/core';
import { SportsTestComponent } from './sports-test/sports-test.component';
import { SportsTestDetailComponent } from './sports-test-detail/sports-test-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    { path: 'sports', component: SportsTestComponent },
    { path: 'sportsDetail/:sportId', component: SportsTestDetailComponent},
    { path: 'sportsDetail/edit/:athleteId', component: SportsTestDetailComponent},
    { path: 'login',  component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
