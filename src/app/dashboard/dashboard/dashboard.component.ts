import { Component } from '@angular/core';
import { TaskListComponent } from '../../task/task-list/task-list.component';
import { AddTaskComponent } from '../../task/add-task/add-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskListComponent, AddTaskComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
