import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {LoginResponseModel} from "../Models/UserResponse";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  constructor( private http: Http){}
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  loginResponse: LoginResponseModel
  IP_ADDRESS = "http://10.150.194.207/"

  fetchData= function(id,pas) {
    this.http.post(this.IP_ADDRESS+"api/v1/login", { "id": id , "pswd":pas }).subscribe(                     //http://localhost:5555/users
      (res:Response)=>{
        this.loginResponse= new LoginResponseModel( res.json() ) ;
      // if (this.users('status')!='True')
        // alert ("Login failed");
      // else if (this.users('status')=='True')
        alert ("Login"+ this.loginResponse.status +this.loginResponse.message );
        // alert("Login not possible");
            }
    )
  }

  ngOnInit() {

  }
  
}
