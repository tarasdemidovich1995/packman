import { Routes } from '@angular/router';
import { DescriptionComponent } from './pages/description/description.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

export const MAIN_PAGE_ROUTES: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    { path: '', component: MainComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'description', component: DescriptionComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'login', component: LoginComponent },
  ]
}];
