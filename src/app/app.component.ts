import { Component } from '@angular/core';
import { CityComponent } from './components/city/city.component';
import { InfoCityComponent } from './components/info-city/info-city.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
}
