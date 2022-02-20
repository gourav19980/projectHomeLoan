import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private regservice:RegistrationService, private router: Router) { }
   submitted: boolean = false;
  contactForm:any;
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
        id:[],
      firstname:  ['',Validators.required, Validators.minLength(5)],
      lastname: ['',Validators.required, Validators.minLength(5)],
      primaryEmail:['',Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      gender: ['',Validators.required],
      mobileNo: ['',Validators.required, Validators.maxLength(10),Validators.pattern('[- +()0-9]+')],
      currentLoc: ['',Validators.required, Validators.minLength(5)],
      loanAmount: ['',Validators.required, Validators.minLength(5),Validators.pattern('[- +()0-9]+')]

    })

  }
  

  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get primaryEmail() {
    return this.contactForm.get('primaryEmail')
  }
  //  get gender() {
  //   return this.contactForm.get('gender');
  // } 
  onSubmit() {						
    //     this.submitted = true;						
    //     if(this.contactForm.invalid){						
    //       return;						
    //     }						
        this.regservice.addUser(this.contactForm.value)						
          .subscribe( data => {	
           var x = Math.floor((Math.random() *5000000) + 1);
          alert("Application has been submitted successfully. Your loan number is  " + x );				
            this.router.navigate(['homeloan']);						
          });						
      }		
}

