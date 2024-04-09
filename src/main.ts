
// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



// cette fontction permet de démarrer une instance d'application angular
// à partir d'un composant standalone
bootstrapApplication(AppComponent,{
  
  // ici on injecte le httpClientModule car on l'utilise dans un composant 
  // qui appel un service qui l'utilise
  // ce composant est appelé par AppComponent
  providers: [
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(),
  ]
});