import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
@Output() newCity = new EventEmitter<string>();

  enteredCity: string;
  city = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  submitCity() {
    this.newCity.emit(this.city.value);
  }

}
