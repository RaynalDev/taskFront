import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from './task.model';
import  { environment } from '../../environments/environment';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve tasks from the API via GET', () => {
    const dummyTasks: Task[] = [
      { _id: '1', title: 'Test Task 1', completed: false },
      { _id: '2', title: 'Test Task 2', completed: true }
    ];

    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(dummyTasks);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTasks);
  });

  it('should add a task via POST', () => {
    const newTask: Task = { _id: '3', title: 'New Task', completed: false };

    service.addTask(newTask).subscribe(task => {
      expect(task).toEqual(newTask);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}`);
    expect(req.request.method).toBe('POST');
    req.flush(newTask);
  });

  it('should delete a task via DELETE', () => {
    const taskId = '1';

    service.deleteTask(taskId).subscribe(response => {
      expect(response).toEqual(null);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/${taskId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should update a task via PUT', () => {
    const updatedTask: Task = { _id: '1', title: 'Updated Task', completed: true };

    service.updateTask(updatedTask).subscribe(task => {
      expect(task).toEqual(updatedTask);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/${updatedTask._id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedTask);
  });
});
