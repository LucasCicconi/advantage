// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Dashboard } from './dashboard/dashboard';
import { ManageProfile } from './profile/manage-profile/manage-profile';
import { TermsOfService } from './legal/terms-of-service/terms-of-service';
import { PrivacyPolicy } from './legal/privacy-policy/privacy-policy';

// Importe o AuthGuard que criaremos depois
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Advantage - Home' },
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login, title: 'Advantage - Login' },
      { path: 'register', component: Register, title: 'Advantage - Registro' },
      { path: 'forgot-password', component: ForgotPassword, title: 'Advantage - Recuperar Senha' },
    ]
  },
  {
    path: 'dashboard',
    component: Dashboard,
    // canActivate: [authGuard], // Descomentar após criar o guard
    title: 'Advantage - Painel'
  },
  {
    path: 'profile/manage',
    component: ManageProfile,
    // canActivate: [authGuard], // Descomentar após criar o guard
    title: 'Advantage - Gerenciar Perfil'
  },
  {
    path: 'legal',
    children: [
      { path: 'terms-of-service', component: TermsOfService, title: 'Advantage - Termos de Serviço' },
      { path: 'privacy-policy', component: PrivacyPolicy, title: 'Advantage - Política de Privacidade' }
    ]
  },
  // Você pode adicionar outras rotas aqui:
  // { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  // { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona rotas não encontradas para a Home
];
