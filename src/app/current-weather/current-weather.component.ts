import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherForecastService } from '../weather-forecast.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  weather$: Observable<Weather>;
  Math = Math;
  constructor(private WeatherService: WeatherForecastService) {}

  ngOnInit(): void {
    this.showWeather();
  }

  showWeather() {
    this.weather$ = this.WeatherService.getWeatherForecast('Lisbon');
  }
}
