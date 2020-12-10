import { Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from 'src/app/shared/enums/app-routes-names.enum';
import { EndComponent } from './pages/end/end.component';
import { GameComponent } from './pages/game/game.component';
import { StartComponent } from './pages/start/start.component';
import { GameLayoutComponent } from './shared/components/game-layout/game-layout.component';

export const GAME_ROUTES: Routes = [
  {
    path: APP_ROUTES_NAMES.BASE,
    component: GameLayoutComponent,
    children: [
      { path: APP_ROUTES_NAMES.BASE, component: GameComponent },
      { path: APP_ROUTES_NAMES.START, component: StartComponent },
      { path: APP_ROUTES_NAMES.END, component: EndComponent }
    ]
  },
];
