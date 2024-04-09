import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() currentTask: Task = { title: '', completed: false }


  @Output() update = new EventEmitter<Task>();

  constructor(){}

  ngOninit(task: Task){

    this.currentTask = task;
  }
}
