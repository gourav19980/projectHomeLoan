import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoanComponent } from './Components/loan/loan.component';

import { HomeLoanComponent } from './Components/home-loan/home-loan.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'loan', component: LoanComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'homeloan', component:HomeLoanComponent },

  {path: '', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
