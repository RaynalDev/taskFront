import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule, RouterOutlet, TasksModule],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
