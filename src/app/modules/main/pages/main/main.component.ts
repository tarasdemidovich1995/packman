import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/modules/main/shared/interfaces';
import { APP_ROUTES_NAMES } from 'src/app/shared/enums/app-routes-names.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public menuPoints: MenuItem[] = [
    { name: 'New game', path: APP_ROUTES_NAMES.GAME_FULL },
    { name: 'Settings', path: APP_ROUTES_NAMES.SETTINS_FULL },
    { name: 'How to play', path: APP_ROUTES_NAMES.DESCRIPTION_FULL },
    { name: 'Statistics', path: APP_ROUTES_NAMES.STATISTICS_FULL }
  ];

  constructor(private router: Router) {}

  public navigateTo(point: MenuItem): void {
    this.router.navigate([point.path]);
  }

}
