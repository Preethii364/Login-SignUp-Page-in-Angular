import { Injectable } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {LoginResponseModel} from "./Models/UserResponse";
import { Router} from "@angular/router"
import {DashboardResponseModel} from "./Models/UserResponse";
import {UserDataModel} from "./Models/UserResponse";

@Injectable({
  providedIn: 'root'
})
  export class APIServiceService 
 {
      router: Router
      IP_ADDRESS = "http://api.development.com/"
      public  dashboardResponse: DashboardResponseModel  =new DashboardResponseModel({"details": {}});
      loginResponse: LoginResponseModel
      userdataResponse: UserDataModel
      Posts = []
      id:number;     
                                         //for userlogin.ts file

          public getDashboard(){
            return this.dashboardResponse
          }

          public getPosts()
            {
                 return this.Posts                     //step 2--->this.Posts is taken to the getallData function written in the APIservice.ts file itself
            }

          constructor(private http: Http,router: Router) 
            {
                this.router = router
                console.log("Hello I am APIServiceService")
                this.getallData()
            }

          public getallData = function()                //FUNCTION 1              //Get request function to fetch all posts from the server
          {
                console.log("GetAllData Calling")
                this.http.get(this.IP_ADDRESS+"api/v1/getposts").subscribe(                     //http://localhost:5555/users
                (res:Response)=>
                           {
                                console.log( "Debug request",  res.json());
                                this.Posts = res.json()                      //after the posts are received from the server via the GET request it is stored in "this.Posts"
                           }                                            //*cntd locally which is then fetched by the getPosts method
                         )
          }


          public fetchData= function(username,pas)         //FUNCTION 2          //LOGIN PAGE
           {
                this.http.post(this.IP_ADDRESS+"api/v1/login", { "username": username , "pas":pas }).subscribe(                     //http://localhost:5555/users
                (res:Response)=>
                           {
                                  this.loginResponse= new LoginResponseModel( res.json() ) ;

                                  if(this.loginResponse.status)                 // Change router outleTs to Dashboard
                                        {   
                                          // alert('Login successful') ;
                                           alert ("Login "+ this.loginResponse.status +this.loginResponse.message );                          
                                           console.log(this.router)
                                           this.router.navigate(["/dashboard"])
                                         } 
                
                                  else
                                         {
                                             alert('Invalid credentials')
                                          }
          
                             }
                   )        
          
          
}

                
            dashboardData= function()                           //FUNCTION 3
            {
                 
               this.http.post(this.IP_ADDRESS+"api/v1/dashboard", {  }).subscribe(            //http://localhost:5555/users
               
              (res:Response)=>{
                                        
               this.dashboardResponse  =  new DashboardResponseModel( res.json() )             // this.loginResponse= new LoginResponseModel( res.json() ) ;
               

            }
    )
 }

}
