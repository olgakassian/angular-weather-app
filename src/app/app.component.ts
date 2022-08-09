import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  city: string = 'Lisbon';
  title = 'Weather App';


updateCityName(newCity: string){
  this.city = newCity;
}
}
