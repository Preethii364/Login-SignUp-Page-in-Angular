import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {LoginResponseModel} from "../Models/UserResponse";
import { Router} from "@angular/router";
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit 
{
  router: Router
                    // IP_ADDRESS = "http://api.development.com/"

  public loginResponse: LoginResponseModel
  ApiService : APIServiceService 
  constructor( router: Router,private apiService: APIServiceService)
    {
        this.router = router
        this.ApiService = apiService 
    }

                        // id:number;
                        // private headers = new Headers({ 'Content-Type': 'application/json'});



 


  ngOnInit()
   {
    
   }
  
}
