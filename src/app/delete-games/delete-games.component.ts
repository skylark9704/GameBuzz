import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-delete-games',
  templateUrl: './delete-games.component.html',
  styleUrls: ['./delete-games.component.css']
})
export class DeleteGamesComponent implements OnInit {

  gamesArray = []
  game;

  constructor( private games : GamesService) {
    var response = this.games.getAllGames()
    response.subscribe(res => {
      console.log(res)
      this.game = res
      var i;
      for (let items in res){
        this.gamesArray.push(items)
      }

      console.log(this.gamesArray)
    })

  }

  ngOnInit() {
  }

  delete(id: any){
    console.log(id)
    var response = this.games.deleteGame(id)
    response.subscribe(res => {
      console.log(res)
    })
  }

  serialize(index){
    return index+1
  }

}
