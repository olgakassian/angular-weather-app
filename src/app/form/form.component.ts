import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
@Output()

  city = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.city = this.fb.control({});
  }

  submitCity() {
    let enteredCity = this.city.value;
    console.log(enteredCity);
  }
}
