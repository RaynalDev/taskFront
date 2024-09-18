import { Component, EventEmitter, Output, output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  @Output() taskAdded = new EventEmitter<Task>();

  tasks: Task[] = [];
  private subscriptions = new Subscription();
  editingTaskId: string | undefined | null = null;

  constructor(private TaskService: TaskService, private router: ActivatedRoute) { }

  ngOnInit() {

    const tasksSubscription = this.TaskService.getTasks().subscribe((data: Task[]) => {

      // initialise le tableau de taches avec un observable renvoyé par le back
      this.tasks = data;
      console.log(this.tasks);

    });
    this.subscriptions.add(tasksSubscription);
  }


  createTask(title: string) {
    const taskToCreate: Task = { title: title, completed: false };
    const addTaskSubscription = this.TaskService.addTask(taskToCreate).subscribe(task => {
      console.log('Tache crée', task);

      //je sychnronise mon front avec mon back
      this.taskAdded.emit(taskToCreate);
    })
    this.subscriptions.add(addTaskSubscription);

  }

}
