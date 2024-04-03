import { Component } from '@angular/core';
import { TachesV0Service } from '../taches-v0.service';
import { TaskToBackEndService } from '../task-to-back-end.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrl: './tasks-manager.component.scss'
})
export class TasksManagerComponent {
  private idCompteur = 0;
  tasks: Task[] = [];


  constructor(public tachesService: TachesV0Service, private taskToBackEndService: TaskToBackEndService) { }

  ngOnInit() {
    this.taskToBackEndService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log(this.tasks);
      
    });
  }

  addTask(title: string) {
    this.tachesService.addTask(title);
    console.log("ajout ds tableau");

    console.log(title);
  }


  // TO BACKEND

  createTask(title: string) {
    const newTask: Task = { _id: 'this.idCompteur++', title: title, completed: false };
    this.taskToBackEndService.addTask(newTask).subscribe(task => {
      console.log('Tache crée', task);
    })
  }



  // Dans ton composant, par exemple task-manager.component.ts
  removeTask(task: Task): void {
    console.log(task);
    
    this.taskToBackEndService.deleteTask(task._id).subscribe({
      next: (response) => {
        // Actualiser la liste des tâches ou enlever la tâche supprimée du tableau
        this.tasks = this.tasks.filter(task => task.id !== task.id);
        console.log(response.message);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression :', err);
      }
    });
  }

}
