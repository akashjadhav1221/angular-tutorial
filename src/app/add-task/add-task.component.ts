import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task = '';

  @Output() onTaskAdd: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.onTaskAdd.emit(this.task);
    console.log('Event Emitted');
    this.task = '';
  }

}
