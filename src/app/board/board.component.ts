import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ReversiService} from '../reversi.service';
import { Board, C, Turn, ReversiModelInterface } from '../ReversiDefinitions';
import { Observable } from 'rxjs';
import { IaService } from '../ia.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
 //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  constructor(private rs: ReversiService, private ia: IaService) { }

  ngOnInit() { 

  }

  getBoard():Board{
    return this.rs.getBoard();
  }

  notEmpty(c:C):boolean{
    return c!==C.Empty;
  }

  getPlayer(c:C): Turn{
    return c===C.Player1?C.Player1:C.Player2;
  }

  canPlay(x : number, y : number):boolean{
    return this.rs.PionsTakenIfPlayAt(x,y).length>0;  
  }

  playHere(x,y){
    this.rs.play(x,y)
  }

  get ObservableReversi(): Observable<ReversiModelInterface>{
    return this.rs.getObservable();
  }

  trackIndex(index:number, element: any):number{
    return index;
  }
}
