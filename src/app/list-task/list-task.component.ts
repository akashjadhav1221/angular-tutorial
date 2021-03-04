import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  @Input() task: string;
  taskList = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('OnChanges', this.task);
    if(this.task.trim().length > 0)
    this.taskList.push(this.task);
  }

}
