import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 export class WeatherService {

 constructor(private http: HttpClient) { }

  async getWeather(name: string) {
     return new Promise<any>((resolve, reject) => {
        this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e9eed156a0b510ec34190da21e39708f&units=metric&lang=ru`)
          .subscribe(res => {
            resolve(res);
          }, error => {
            console.log("No data");
        });
     });
  }
}
