import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, of } from 'rxjs';
import { filter, map, reduce, scan } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.userService.userActivated.subscribe(data => {
      console.log('User: ', data);
  })


    const numbers = Observable.create((observer: Observer<number>) => {
      observer.next(1);
    });

    numbers.subscribe((x) => {
      console.log(x);
    });

    const source = interval(1000).pipe(
      filter((data: number) => {
        return data === 0 ?  false : true;
      }),
      map((data: number) => {
        return data * 2;
      })
    );

    const obs1 = of(1,2,3,4,5);

    obs1
    .pipe(
      // reduce((total, val) => {
      //   return total + val;
      // }, 0),

      scan((total, val) => {
        return total + val;
      }, 0)
    
    )
    .subscribe(data => {
      console.log('Obs1', data);
    })

    // source.subscribe(data => {
    //   console.log(data);
    // })


  }

  activate(){
    this.userService.userActivated.next(1);
  }

}
