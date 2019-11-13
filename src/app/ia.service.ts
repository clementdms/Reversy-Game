import { Injectable, Input } from '@angular/core';
import { TileCoords, Board, C, Turn } from './ReversiDefinitions';
import { ReversiService } from './reversi.service';
import { BoardComponent } from './board/board.component';

@Injectable({
  providedIn: 'root'
})
export class IaService {
  active:boolean = true; 
  //timerVitesse:number = 500;
  player:Turn;

  constructor(private rs: ReversiService) { 
    this.rs.getObservable().subscribe(() => {
      this.iaJoue();
    });
  }


  iaJoue(){
    if(this.player == this.rs.turn() && this.active)
    {
      console.log(this.player);
      setTimeout(()=>this.randomPlay(this.ouJouer(this.rs.getBoard())),500);
    }
  }
  //Renvoie la liste des coordonnées ou on peut jouer
  ouJouer(board:Board):TileCoords[]{
    let tableau : TileCoords[]=[];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.rs.PionsTakenIfPlayAt(i, j).length > 0) {
         tableau.push({x:i,y:j});
        }
      }
    }
    return tableau;
  }

  //En argument la liste des coordonnées jouables
  randomPlay(tableau:TileCoords[]):void{

    if(tableau.length>0){

      let tab:number[] = [];
      let verif:number = -1;

      for(let i = 0; i< tableau.length; i++){

        tab.push(this.rs.PionsTakenIfPlayAt(tableau[i].x,tableau[i].y).length)

        if(tableau[i].x == 0 && tableau[i].y == 0 || tableau[i].x == 7 && tableau[i].y == 0 || tableau[i].x == 0 && tableau[i].y == 7 || tableau[i].x == 7 && tableau[i].y == 7)
        {
          verif = i
        }
      }
      let maxCoord:TileCoords[] = [];

      if(verif == -1)
      {
        for(let i = 0; i< tableau.length; i++){
          if(tab[i] === Math.max(...tab))
          maxCoord.push({x:tableau[i].x, y:tableau[i].y});
        }
      }
      else{
        maxCoord = [];
        maxCoord.push({x:tableau[verif].x,y:tableau[verif].y})
      }
      
      let random:number = Math.floor(Math.random()*(maxCoord.length-1));

      //Empeche l'adversaire d'avoir un angle et priorisé si adversaire can't play
      if(maxCoord.length > 1){

      }
    
      this.rs.play(maxCoord[random].x,maxCoord[random].y);
    }
  }
  
  //Change la valeur de active (Activation / Desactivation IA J1)
  modifieActive(){
    this.active?this.active=false : this.active=true;
    this.iaJoue();
  }
}