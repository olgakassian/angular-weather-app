import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  //   @Output() city = new EventListener<string[]>();
  enteredCity = new FormControl();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  //   submitCity(city: string) {}
}
