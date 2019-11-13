import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { C, Turn } from '../ReversiDefinitions';

@Component({
  selector: 'app-pion',
  templateUrl: './pion.component.html',
  styleUrls: ['./pion.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PionComponent implements OnInit {
  @Input() player:Turn;

  constructor() {
  }

  ngOnInit() {
  }
  
  isPlayer1():boolean{
    return this.player === C.Player1;
  }

}
