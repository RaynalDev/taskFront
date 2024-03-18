import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksManagerComponent } from '../tasks-manager/tasks-manager.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TasksManagerComponent],
  imports: [CommonModule, RouterModule],
  exports: [TasksManagerComponent]
})
export class TasksModule { }