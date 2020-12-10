import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameLayoutComponent } from './shared/components/game-layout/game-layout.component';
import { StartComponent } from './pages/start/start.component';
import { EndComponent } from './pages/end/end.component';
import { GameComponent } from './pages/game/game.component';
import { RouterModule } from '@angular/router';
import { GAME_ROUTES } from './game.routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    GameLayoutComponent,
    StartComponent,
    EndComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [SharedModule, RouterModule.forChild(GAME_ROUTES)],
  exports: [RouterModule]
})
export class GameModule { }
