import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [],
  imports: [
    RouterModule, 
    DashboardComponent, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    BrowserModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
      serverLoggingUrl: 'http://localhost:3000/api/logs'
    })
  ]
})
export class AppModule { }
