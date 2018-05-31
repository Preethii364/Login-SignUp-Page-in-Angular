import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {LoginResponseModel} from "../Models/UserResponse";
import { Router} from "@angular/router"

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  router: Router

  constructor( private http: Http, router: Router){
    this.router = router
    console.log('router is')
    console.log(this.router)
  }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  loginResponse: LoginResponseModel
  IP_ADDRESS = "http://api.development.com/"

  fetchData= function(username,pas) {
    this.http.post(this.IP_ADDRESS+"api/v1/login", { "username": username , "pas":pas }).subscribe(                     //http://localhost:5555/users
      (res:Response)=>{
        this.loginResponse= new LoginResponseModel( res.json() ) ;
   
        if(this.loginResponse.status){
            // Change router outles to Dashboard
            console.log(this.router)
            this.router.navigate(["/dashboard"])
        } else{
          alert('Invalid credentials')
        }

            }
    )
  }

  ngOnInit() {

  }
  
}
