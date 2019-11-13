import { Component } from '@angular/core';
import { Turn, C } from './ReversiDefinitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'L3M-TP4v4';
  players: Turn[]  = [C.Player1, C.Player2];
}
