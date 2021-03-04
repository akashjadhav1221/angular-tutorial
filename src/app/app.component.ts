import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  task = '';

  add(task: string){
    console.log('Recieved', task);
    this.task = task;
  }
}
