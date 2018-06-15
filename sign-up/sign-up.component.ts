import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {SignUpResponseModel} from "../Models/UserResponse";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});
  signupResponse: SignUpResponseModel
  IP_ADDRESS = "http://api.development.com/"

  signupData= function(username,pas,email,gender) {
    this.http.post(this.IP_ADDRESS+"api/v1/signup", {"username":username, "pas":pas ,"email": email, "gender":gender}).subscribe(                     //http://localhost:5555/users
      (res:Response)=>{
        this.signupResponse= new SignUpResponseModel( res.json() ) ;
      // if (this.users('status')!='True')
        // alert ("Login failed");
      // else if (this.users('status')=='True')
        alert ("SignUp "+ this.signupResponse.status +this.signupResponse.message );
        // alert("Login not possible");
            }
    )
  }

  ngOnInit() {
  }

}
