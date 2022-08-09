import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Forecast } from './forecast.model';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(private http: HttpClient) {}

  getWeatherForecast(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57b2c40fdae71a6ba41d72685e3226e2&units=metric`
    );
  }


  getWeeklyForecast(lat: number, lon: number): Observable<Forecast> {
    return this.http.get<Forecast>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=57b2c40fdae71a6ba41d72685e3226e2&units=metric`)

  }
}