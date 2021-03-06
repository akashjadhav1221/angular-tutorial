import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  task: Task;

  constructor(){
    console.log('To check CI/CD pipeline.');
  }

  

  add(task: Task){
    console.log('Recieved', task);
    this.task = task;
  }
}
