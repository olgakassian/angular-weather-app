import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Forecast } from '../forecast.model';
import { WeatherForecastService } from '../weather-forecast.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
@Input() weather: Weather;

forecast$: Observable<Forecast>;

  constructor(private weatherService: WeatherForecastService) { 
  }

  ngOnInit(): void {
  this.forecast$ =  this.weatherService.getWeeklyForecast(this.weather.coord.lat, this.weather.coord.lon).pipe(map(main =>( {...main, daily: main.daily.slice(1, 7)})));
  }
  
convertToDate(timestamp: number){
  return new Date(timestamp * 1000);
}
}