import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Dans task-to-back-end.service.ts
  deleteTask(taskId: string|undefined): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete(url);
  }

  updateTask(task : Task): Observable<any>{
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.put(url, task);
    // return this.http.put(url, {"title": task.title, "completed": task.completed});
  }

}
