import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './pages/description/description.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MAIN_PAGE_ROUTES } from './main.routes';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { ControlsTipComponent } from 'src/app/shared/components/controls-tip/controls-tip.component';

@NgModule({
  declarations: [
    MainComponent,
    DescriptionComponent,
    SettingsComponent,
    StatisticsComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    ControlsTipComponent
  ],
  imports: [SharedModule, RouterModule.forChild(MAIN_PAGE_ROUTES)],
  exports: [RouterModule]
})
export class MainModule {}
