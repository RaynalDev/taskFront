import { Injectable } from '@angular/core';
import { Task } from './task.model';


//ce décorateur indiqeu qume cette classe peut être injectté partout 
// ou cela est nécéssaire
// cette classe est traité comme un singleton injectable
@Injectable({
  providedIn: 'root'
})


export class TachesV0Service {
  private tasks: Task[] = [];
  private idCompteur = 0;

  constructor() { }

  addTask(title:string){
    // const newTask: Task = { id:this.idCompteur++, title};
    
    //ici on ne peut pas réassigner ces newTAsk à une nouvelle valeur ou un nouvel 
    //obejet
    //en revanche on peut modifier ses propriétés ss pb

    // this.tasks.push(newTask);
  }

  getTask(){
    //return this.tasks; // ici on retourne le tableau des tâches qui pourraait être modifié;
    return [...this.tasks]; 
    // ici on retourne une copie du tableau 
    //comme ça le tableau de tâche d'origine ne sera jamis 
    //inpacté par les modifications éventuelles
  }


  // removeTask(id:number){
  //   this.tasks = this.tasks.filter(t => t.id!== id)
  //   // ici on préfère filter que Splice pour ne pas modifier directement le tabelau
  // }
}
