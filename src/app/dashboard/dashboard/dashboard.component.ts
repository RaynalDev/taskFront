import { Component } from '@angular/core';
import { TaskListComponent } from '../../task/task-list/task-list.component';
import { AddTaskComponent } from '../../task/add-task/add-task.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskListComponent, AddTaskComponent,RouterOutlet,RouterLink  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
