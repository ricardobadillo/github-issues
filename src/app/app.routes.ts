// Rutas de la aplicación.
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'issues', loadComponent: () => import('./pages/issues-list/issues-list.component') },
  { path: 'issue/:number', loadComponent: () => import('./pages/issue/issue.component') },
  { path: '**', redirectTo: 'issues' },
];
