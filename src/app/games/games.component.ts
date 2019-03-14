import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gamesObj=[];
  constructor( private games : GamesService) {
    var response = this.games.getAllGames()
    response.subscribe( result => {
      for(var i in result){
        this.gamesObj.push([i, result [i]]);
      }
    })
  }

  ngOnInit() {
  }

}
