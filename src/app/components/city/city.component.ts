import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../service/weather.service';
import { EventService } from './../../service/event.service'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  selectedCityName: string = '';
  cityNameList = [
      {
        en: 'Moscow',
        ru: 'Москва'
      },
      {
        en: 'Saint+Petersburg',
        ru: 'Санкт-Петербург'
      },
      {
        en: 'Ekaterinburg',
        ru: 'Екатеринбург'
      },
      {
        en: 'Vladivostok',
        ru: 'Владивосток'
      }
   ]

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  changeSelectedCity(cityName: string) {
        this.eventService.changeInfoCity.emit(cityName);
        this.selectedCityName = cityName;
  }
}
