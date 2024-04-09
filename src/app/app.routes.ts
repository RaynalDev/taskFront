import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AddTaskComponent } from './task/add-task/add-task.component';

export const routes: Routes = [
    { path: 'tasks',component: TaskListComponent},
    { path: 'addTask',component: AddTaskComponent},
];
