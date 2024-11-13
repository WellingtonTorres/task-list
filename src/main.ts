import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthComponent } from './app/features/auth/auth.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: 'login'}
];


// Inicialize a aplicação
bootstrapApplication(AuthComponent, {
  providers: [
    provideRouter(routes),                              // Configuração de rotas
    importProvidersFrom(BrowserAnimationsModule)        // Outros providers necessários
  ]
}).catch(err => console.error(err));