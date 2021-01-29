import { Component, HostListener } from '@angular/core';
import { KEY_CODE } from '../../enums/key-codes.enum';
import { ActiveButtons } from '../../interfaces/active-buttons';

@Component({
  selector: 'app-controls-tip',
  templateUrl: './controls-tip.component.html',
  styleUrls: ['./controls-tip.component.scss']
})
export class ControlsTipComponent {

  public activeButtons: ActiveButtons = {
    upArrow: false,
    downArrow: false,
    leftArrow: false,
    rightArrow: false,
    enter: false,
    backspace: false,
  };

  @HostListener('window:keydown', ['$event'])
  public keyDownEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case KEY_CODE.UP_ARROW:
        this.activeButtons.upArrow = true;
        break;
      case KEY_CODE.DOWN_ARROW:
        this.activeButtons.downArrow = true;
        break;
      case KEY_CODE.LEFT_ARROW:
        this.activeButtons.leftArrow = true;
        break;
      case KEY_CODE.RIGHT_ARROW:
        this.activeButtons.rightArrow = true;
        break;
      case KEY_CODE.ENTER:
        this.activeButtons.enter = true;
        break;
      case KEY_CODE.BACKSPACE:
        this.activeButtons.backspace = true;
        break;
      default:
        break;
    }
  }

  @HostListener('window:keyup', ['$event'])
  public keyUpEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case KEY_CODE.UP_ARROW:
        this.activeButtons.upArrow = false;
        break;
      case KEY_CODE.DOWN_ARROW:
        this.activeButtons.downArrow = false;
        break;
      case KEY_CODE.LEFT_ARROW:
        this.activeButtons.leftArrow = false;
        break;
      case KEY_CODE.RIGHT_ARROW:
        this.activeButtons.rightArrow = false;
        break;
      case KEY_CODE.ENTER:
        this.activeButtons.enter = false;
        break;
      case KEY_CODE.BACKSPACE:
        this.activeButtons.backspace = false;
        break;
      default:
        break;
    }
  }
}
