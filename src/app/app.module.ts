import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoanComponent } from './Components/loan/loan.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoanComponent,
    AboutUsComponent,
    ContactUsComponent,
    CalculatorComponent,
    HomeLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
