import { NgModule } from '@angular/core';
import { SportsTestComponent } from './sports-test/sports-test.component';
import { SportsTestDetailComponent } from './sports-test-detail/sports-test-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'sports', component: SportsTestComponent },
    { path: 'sportsDetail/:sportId', component: SportsTestDetailComponent},
    { path: 'sportsDetail/edit/:athleteId', component: SportsTestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
