import { Component, OnInit, Input } from '@angular/core';
import{UserBlogModel} from "../Models/UserResponse"
import{DisplayResponseModel} from "../Models/UserResponse"
import {APIServiceService} from "../apiservice.service"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  constructor( private apiService: APIServiceService) { }

   @Input("postdata")                                             //to create our own selector having customized attributes of its own
    public  displayResponse: UserBlogModel = new UserBlogModel( {} )       //the input decorator helps bind the html doc's interpolation with the attribute mentioned inside it through data binding.
                                                                 //we created a new instance of UserBlogModel here
     showDetails = false
      
   
    //@Input("filePath")
   // filePath =res['data'];


      ngOnInit()
       { 
              // this.getallData();
       }

       toggleDetails(){
          this.showDetails = !this.showDetails
       }
}
