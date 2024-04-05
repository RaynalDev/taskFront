import { Component, OnDestroy, } from '@angular/core';
import { TaskToBackEndService } from '../task-to-back-end.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-manager.component.html',
  styleUrl: './tasks-manager.component.scss'
})
export class TasksManagerComponent implements OnDestroy {
  tasks: Task[] = [];
  private subscriptions = new Subscription();

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


  createTask(title: string) {
    const newTask: Task = { title: title, completed: false };
    const addTaskSubscription = this.taskToBackEndService.addTask(newTask).subscribe(task => {
      console.log('Tache crée', task);
      this.tasks.push(task);
    })
    this.subscriptions.add(addTaskSubscription);

  }

  // Dans ton composant, par exemple task-manager.component.ts
  removeTask(task: Task): void {
    console.log(task);

   const deleteTaskSubscription = this.taskToBackEndService.deleteTask(task._id).subscribe({
      next: (response) => {

        // Actualiser la liste des tâches ou enlever la tâche supprimée du tableau
        
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

  update(task : Task){

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();    
  }

}
