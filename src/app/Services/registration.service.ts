import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl:string="http://localhost:3000/";
  constructor(private httpSer : HttpClient) {

   }

   public addUser(user: User){
    return this.httpSer.post(this.baseUrl.concat("user"), user);
   }
}
