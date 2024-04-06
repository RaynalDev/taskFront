import { Component, OnDestroy, } from '@angular/core';
import { TaskToBackEndService } from '../task-to-back-end.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-manager.component.html',
  styleUrl: './tasks-manager.component.scss'
})
export class TasksManagerComponent implements OnDestroy {
  tasks: Task[] = [];
  private subscriptions = new Subscription();
  editingTaskId: string | undefined | null = null;

  constructor(private taskToBackEndService: TaskToBackEndService) { }

  ngOnInit() {

    // initialise le tableau de taches avec un observable renvoyé par le back
    // de cette façon
    const tasksSubscription = this.taskToBackEndService.getTasks().subscribe((data: Task[]) => {
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
    const newTask: Task = { title: title, completed: false };
    const addTaskSubscription = this.taskToBackEndService.addTask(newTask).subscribe(task => {
      console.log('Tache crée', task);
      this.tasks.push(task);
    })
    this.subscriptions.add(addTaskSubscription);

  }

  removeTask(task: Task) {
    console.log(task);

    const deleteTaskSubscription = this.taskToBackEndService.deleteTask(task._id).subscribe({
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
    
    const updateTaskSubscription = this.taskToBackEndService.updateTask(task).subscribe({
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
