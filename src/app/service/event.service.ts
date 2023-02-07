import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  changeInfoCity: any = new EventEmitter();

  constructor() { }
}
