import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../service/weather.service';
import { CityComponent } from './../city/city.component'
import { EventService } from './../../service/event.service'

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.component.html',
  styleUrls: ['./info-city.component.css']
})
export class InfoCityComponent implements OnInit {

  temperature: number = 0;
  speed: number = 0;
  nameCity: string = '';

 constructor(private weatherService: WeatherService, private eventService: EventService) { }

  ngOnInit(): void {
    this.subscribeOnChangeCityEvent();
  }

   subscribeOnChangeCityEvent() {
      this.eventService.changeInfoCity.subscribe((payload: any) => {
             this.weatherService.getWeather(payload).then((res) => {
                    this.temperature = res.main.temp;
                    this.speed = res.wind.speed;
                    this.nameCity = res.name;
             })
      })
   }
}
