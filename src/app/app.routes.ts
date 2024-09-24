import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: 'addTask',component: AddTaskComponent, canActivate: [authGuard]},
    { path: 'taskList',component: TaskListComponent, canActivate: [authGuard]},
    { path: 'dashboard',component: DashboardComponent, canActivate: [authGuard]},
    { path: 'login',component: LoginComponent},
    { path: 'signup',component: SignupComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'},

];
