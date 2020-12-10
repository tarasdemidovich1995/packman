import { Routes } from '@angular/router';
import { EndComponent } from './pages/end/end.component';
import { GameComponent } from './pages/game/game.component';
import { StartComponent } from './pages/start/start.component';
import { GameLayoutComponent } from './shared/components/game-layout/game-layout.component';

export const GAME_ROUTES: Routes = [
  {
    path: '',
    component: GameLayoutComponent,
    children: [
      { path: '', component: GameComponent },
      { path: 'start', component: StartComponent },
      { path: 'end', component: EndComponent }
    ]
  },
];
