import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DateComponent } from './date/date.component';
import { OfficesComponent } from './offices/offices.component';


@NgModule({
  declarations: [AppComponent, FormComponent, CurrentWeatherComponent, ForecastComponent, DateComponent, OfficesComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}