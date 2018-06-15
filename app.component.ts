import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({                                 //Component decorator that is attached to the class in that component
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {                 //here it is AppComponent class
  title = 'FORM VALIDATION ';
}
