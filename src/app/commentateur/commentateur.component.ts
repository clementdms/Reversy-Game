import { Component, OnInit, Input } from '@angular/core';
import { Turn, C, Board } from '../ReversiDefinitions';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { ReversiService } from '../reversi.service';

@Component({
  selector: 'app-commentateur',
  templateUrl: './commentateur.component.html',
  styleUrls: ['./commentateur.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentateurComponent implements OnInit {
  @Input() currentPlayer:Turn;
  @Input() board:Board;
  @Input() Endgame:boolean;


  constructor(private rs: ReversiService) { }

  ngOnInit() {
  }

  isCurrentPlayer1():boolean{
    return this.currentPlayer===C.Player1; 
  }

  getPionJ1(){
    return this.board.reduce(function(acc,elem) { 
      return acc+elem.reduce(function(accCase, elemCase){
        return elemCase===C.Player1?accCase+=1 : accCase;
        },0);
      },0) 
  }

  getPionJ2(){
    return this.board.reduce(function(acc,elem) { 
      return acc+elem.reduce(function(accCase, elemCase){
        return elemCase===C.Player2?accCase+=1 : accCase;
        },0);
      },0) 
  }

  player1Win():boolean{
    return this.getPionJ1()>this.getPionJ2();
  }
  
  player2Win():boolean{
    return this.getPionJ1()<this.getPionJ2();
  }

  equality():boolean{
    return this.getPionJ1()===this.getPionJ2();
  }

  
}
