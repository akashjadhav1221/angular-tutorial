import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  @Input() task: Task;
  taskList = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('OnChanges', this.task);
    if(this.task && this.task.title.length > 0)
    this.taskList.push(this.task);
  }

  removeTask(task: Task){
   let index = this.taskList.indexOf(task);
   if(index != -1)
    this.taskList.splice(index, 1);
  }

}
