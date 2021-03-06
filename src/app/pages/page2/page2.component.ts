import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.userActivated.subscribe(data => {
        console.log('User: ', data);
    })
  }

}
