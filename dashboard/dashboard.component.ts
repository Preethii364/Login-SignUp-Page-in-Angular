import { Component, OnInit,Input } from '@angular/core';
import {DashboardResponseModel} from "../Models/UserResponse";
import { Http,Response,Headers }    from '@angular/http';
import {LoginResponseModel} from "../Models/UserResponse";
import {UserDataModel} from "../Models/UserResponse";
import { ReturnStatement } from '@angular/compiler';
import {APIServiceService} from "../apiservice.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit 
{

        constructor(private http: Http,private apiService: APIServiceService) 
            {
                  this.ApiService = apiService 

            }

                          

   ApiService : APIServiceService 
  // private headers = new Headers({ 'Content-Type': 'application/json'});
  // public  dashboardResponse: DashboardResponseModel 
  loginResponse: LoginResponseModel
  userdataResponse: UserDataModel

   // IP_ADDRESS = "http://api.development.com/"



  ngOnInit() 
  {
    this.ApiService.dashboardData()
  }

}
