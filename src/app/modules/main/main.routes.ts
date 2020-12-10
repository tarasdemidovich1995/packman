import { Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from 'src/app/shared/enums/app-routes-names.enum';
import { DescriptionComponent } from './pages/description/description.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

export const MAIN_PAGE_ROUTES: Routes = [{
  path: APP_ROUTES_NAMES.BASE,
  component: MainLayoutComponent,
  children: [
    { path: APP_ROUTES_NAMES.BASE, component: MainComponent },
    { path: APP_ROUTES_NAMES.SETTINS, component: SettingsComponent },
    { path: APP_ROUTES_NAMES.DESCRIPTION, component: DescriptionComponent },
    { path: APP_ROUTES_NAMES.STATISTICS, component: StatisticsComponent },
    { path: APP_ROUTES_NAMES.LOGIN, component: LoginComponent },
  ]
}];
