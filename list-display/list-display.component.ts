import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {APIServiceService} from '../apiservice.service'

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {                     

  IP_ADDRESS = "http://api.development.com/"
  ApiService : APIServiceService                                                  //
  
  constructor(private http: Http,  private apiService: APIServiceService) {      //use service inside constructor
    this.ApiService = apiService                                                //

  }

  ngOnInit() {

  }

}    