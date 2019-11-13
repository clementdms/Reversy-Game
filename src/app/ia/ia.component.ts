import { Component, OnInit, Input } from '@angular/core';
import { Turn } from '../ReversiDefinitions';
import { IaService } from '../ia.service';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.scss'],
  providers:[IaService]
})
export class IaComponent implements OnInit {
  @Input() player:Turn;

  constructor(private ia: IaService) { }

  ngOnInit() {
    this.ia.player = this.player
  }
  
  modifieActive(){
    this.ia.modifieActive();
  }
}
