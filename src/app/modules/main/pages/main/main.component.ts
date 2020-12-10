import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { KEY_CODE } from 'src/app/shared/enums/key-codes.enum';
import { MenuItem } from 'src/app/modules/main/shared/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public menuPoints: MenuItem[] = [
    { name: 'New game', path: '/game' },
    { name: 'Settings', path: '/main/settings' },
    { name: 'How to play', path: '/main/description' },
    { name: 'Statistics', path: '/main/statistics' }
  ];

  constructor(private router: Router) {}

  public navigateTo(point: MenuItem): void {
    this.router.navigate([point.path]);
  }

}
