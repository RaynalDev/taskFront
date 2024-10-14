
// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { loggingInterceptor } from './app/logging-interceptor.service';

// cette fontction permet de démarrer une instance d'application angular
// à partir d'un composant standalone

bootstrapApplication(AppComponent,{
  
  // ici on injecte le httpClientModule car on l'utilise dans un composant 
  // qui appel un service qui l'utilise
  // ce composant est appelé par AppComponent

  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      LoggerModule.forRoot({
        level:NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.ERROR,
        serverLoggingUrl: 'http://localhost:3000/api/logs'
      })
    ),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor]))
  ]
});