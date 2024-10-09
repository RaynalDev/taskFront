import { Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authGuard } from './auth/auth.guard';
import { AuthSwitcherComponent } from './auth/auth-switcher/auth-switcher.component';

export const routes: Routes = [
    { path: 'addTask',component: AddTaskComponent, canActivate: [authGuard]},
    { path: 'taskList',component: TaskListComponent, canActivate: [authGuard]},
    { path: 'dashboard',component: DashboardComponent, canActivate: [authGuard]},
    { path: 'addTask',component: AddTaskComponent},
    { path: 'taskList',component: TaskListComponent},
    { path: 'dashboard',component: DashboardComponent, children: [
        {path: 'task-list', component: TaskListComponent} //sous-route pour tasklistComponent
    ]},
    { path: 'auth',component: AuthSwitcherComponent},
    { path: 'login',component: LoginComponent},
    { path: 'signup',component: SignupComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'},

];
