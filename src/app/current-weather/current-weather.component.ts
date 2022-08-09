import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherForecastService } from '../weather-forecast.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnChanges {
@Input() updatedCity="";

  weather$: Observable<Weather>;
  Math = Math;
  constructor(private WeatherService: WeatherForecastService) {}

 
  ngOnChanges(changes: SimpleChanges) {
    let currentCity = changes['updatedCity'].currentValue;
    this.showWeather(currentCity);
  }

  showWeather(city: string) {
    this.weather$ = this.WeatherService.getWeatherForecast(city);
  }
}
