import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksManagerComponent } from './tasks-manager/tasks-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule, 
    TasksManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskFront';
}
