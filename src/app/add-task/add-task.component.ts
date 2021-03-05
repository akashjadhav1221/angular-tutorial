import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('taskTitle') taskTitleInput;
  task: Task = new Task('', false);

  @Output() onTaskAdd: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.task.title = this.taskTitleInput.nativeElement.value;
    this.onTaskAdd.emit(this.task);
    console.log('Event Emitted');
    this.clearTask();
  }

  clearTask(){
    this.task = new Task('', false);
  }

}
