import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/modules/main/shared/interfaces';
import { KEY_CODE } from 'src/app/shared/enums/key-codes.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuPoints: MenuItem[];
  @Output() navigateHandler = new EventEmitter<MenuItem>();

  public currentPoint = 0;

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
        this.navigateHandler.emit(this.menuPoints[this.currentPoint]);
        break;
      default:
        break;
    }
  }
}
