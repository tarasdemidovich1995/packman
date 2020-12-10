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
  public currentPoint = 0;

  constructor(private router: Router) {}

  @HostListener('window:keyup', ['$event'])
  public keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case KEY_CODE.DOWN_ARROW:
        this.currentPoint = (this.currentPoint + 1) % 4;
        break;
      case KEY_CODE.UP_ARROW:
        this.currentPoint = this.currentPoint
          ? this.currentPoint - 1
          : this.menuPoints.length - 1;
        break;
      case KEY_CODE.ENTER:
        this.router.navigate([this.menuPoints[this.currentPoint].path]);
        break;
      default:
        break;
    }
  }
}
