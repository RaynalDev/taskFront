import { Component, OnDestroy, } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks-manager',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-manager.component.html',
  styleUrl: './tasks-manager.component.scss'
})
export class TasksManagerComponent implements OnDestroy {
  tasks: Task[] = [];
  private subscriptions = new Subscription();
  editingTaskId: string | undefined | null = null;

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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
