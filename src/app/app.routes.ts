// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importe o HomeComponent

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Define HomeComponent como a página inicial (URL vazia)
  // Você pode adicionar outras rotas aqui:
  // { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  // { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '' } // Redireciona rotas não encontradas para a Home
];
