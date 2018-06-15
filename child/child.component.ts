import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("parentCount")
  count: number;
  
  @Output("changes")
  change: EventEmitter<number> = new EventEmitter<number>();
  
  updateCount() {
    console.log('Count Value', this.count)
    this.count++;
    this.change.emit(this.count);
  }

  constructor() { }

  ngOnInit() {
  }

}
