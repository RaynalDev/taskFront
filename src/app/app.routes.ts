import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: 'addTask',component: AddTaskComponent},
    { path: 'taskList',component: TaskListComponent},
    { path: 'dashboard',component: DashboardComponent, children: [
        {path: 'task-list', component: TaskListComponent} //sous-route pour tasklistComponent
    ]},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'login',component: LoginComponent},

];
