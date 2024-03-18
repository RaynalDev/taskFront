import { Component } from '@angular/core';
import { TachesV0Service } from '../taches-v0.service';

@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrl: './tasks-manager.component.scss'
})
export class TasksManagerComponent {
  constructor(public tachesService: TachesV0Service){}

  addTask(title:string){
    // if(title!=title){
      this.tachesService.addTask(title);
      console.log("ajout ds tableau");
      
    // }
    console.log("pas d'ajout");
    console.log(title);
    

  }

  removeTask(id:number){
    this.tachesService.removeTask(id);
  }
}
