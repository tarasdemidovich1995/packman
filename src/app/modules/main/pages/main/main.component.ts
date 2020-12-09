import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public menuPoints = [
    'New game',
    'Settings',
    'How to play',
    'Statistics'
  ];
  public currentPoint = 2;
}
