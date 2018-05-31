import { Component, OnInit } from '@angular/core';
import {DashboardResponseModel} from "../Models/UserResponse";
import { Http,Response,Headers }    from '@angular/http';
import {LoginResponseModel} from "../Models/UserResponse";
import{UserDataModel}from "../Models/UserResponse";
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});
 public  dashboardResponse: DashboardResponseModel 
  loginResponse: LoginResponseModel
  userdataResponse: UserDataModel

  IP_ADDRESS = "http://api.development.com/"

  
  fetchData= function() {
    this.http.post(this.IP_ADDRESS+"api/v1/dashboard", {  }).subscribe(                     //http://localhost:5555/users
      (res:Response)=>{
        // this.loginResponse= new LoginResponseModel( res.json() ) ;
   
      this.dashboardResponse  =  new DashboardResponseModel( res.json() ) 
    
     
 


            }
    )
  }

  ngOnInit() {
    this.fetchData()
  }

}
