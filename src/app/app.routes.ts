import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dept-list/dept-list.component').then((c) => c.DeptListComponent)
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then((c) => c.FormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo.component').then((c) => c.DemoComponent)
  }
];
