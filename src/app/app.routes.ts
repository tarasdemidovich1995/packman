import { Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from './shared/enums/app-routes-names.enum';

export const APP_ROUTES: Routes = [
  { path: APP_ROUTES_NAMES.BASE, pathMatch: 'full', redirectTo: APP_ROUTES_NAMES.MAIN_FULL},
  { path: APP_ROUTES_NAMES.MAIN, loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule) },
  { path: APP_ROUTES_NAMES.GAME, loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) }
];
