import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //userActivated = new Subject();
  userActivated = new BehaviorSubject('Hello');
  constructor() { }
}
