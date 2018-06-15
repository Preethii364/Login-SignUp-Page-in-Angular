import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
    count: number = 6;
    
    updateFromChild(event){
      console.log('updateFromChild', event)
      this.count=event;
    }
    
    reset(){
      this.count = 0;
    }
  
  constructor() { }

  ngOnInit() {
  }

}
