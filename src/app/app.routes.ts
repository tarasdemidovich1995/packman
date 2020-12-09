import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main'},
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule) }
];
