import { Component } from '@angular/core';
import { TaskListComponent } from '../../task/task-list/task-list.component';
import { AddTaskComponent } from '../../task/add-task/add-task.component';
import { ProjectMgrComponent } from '../../projectTask/project-mgr/project-mgr.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserMenuComponent } from "../../user-menu/user-menu.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskListComponent, AddTaskComponent, ProjectMgrComponent, RouterOutlet, RouterLink,
    UserMenuComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
