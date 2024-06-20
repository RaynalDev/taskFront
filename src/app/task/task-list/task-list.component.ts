import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AddTaskComponent,FormsModule, MatCheckboxModule, MatButtonModule, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];
  private subscriptions = new Subscription();
  editingTaskId: string | undefined | null = null;
  showAddTaskModal = false;


  constructor(private TaskService: TaskService) { }

  ngOnInit() {

    const tasksSubscription = this.TaskService.getTasks().subscribe((data: Task[]) => {

      // initialise le tableau de taches avec un observable renvoyé par le back
      this.tasks = data;
      console.log(this.tasks);

    });
    this.subscriptions.add(tasksSubscription);
  }


  editTask(task: Task) {
    console.log("edit task");
    this.editingTaskId = task._id;
  }

  createTask(title: string) {
    const taskToCreate: Task = { title: title, completed: false };
    const addTaskSubscription = this.TaskService.addTask(taskToCreate).subscribe(task => {
      console.log('Tache crée', task);

      //je sychnronise mon front avec mon back
      this.tasks.push(task);
    })
    this.subscriptions.add(addTaskSubscription);

  }

  removeTask(task: Task) {
    console.log(task);

    const deleteTaskSubscription = this.TaskService.deleteTask(task._id).subscribe({
      next: (response) => {
        this.tasks = this.tasks.filter(t => t._id !== task._id);
        console.log("tableau de taches", this.tasks);
        console.log(response);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression :', err);
      }
    });
    this.subscriptions.add(deleteTaskSubscription);
  }

  updateTask(task: Task) {
    console.log(task);

    const updateTaskSubscription = this.TaskService.updateTask(task).subscribe({
      next: (response) => {
        const index = this.tasks.findIndex(t => t._id === task._id);
        this.tasks[index].title = task.title;
        this.tasks[index].completed = task.completed;
        console.log(response);
        console.log(this.tasks);

        this.editingTaskId = null;
      },
      error: (err) => {
        console.log('Errueur lors de la modification');

      }
    });
    this.subscriptions.add(updateTaskSubscription);
  }

  cancelUpdateTask() {
    this.editingTaskId = null;
  }

  openTaskDetailModal(task: Task) {

  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
