import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  addGames = new FormGroup({
    game: new FormControl(''),
    status: new FormControl(''),
    platform: new FormControl('')
  })

  statusTypes = ['live', 'await'];
  platformTypes = ['PC', 'Console' , 'Mobile'];
  errorMessage:any;

  constructor(private games : GamesService) { }

  ngOnInit() {
  }

  addGame(){
    console.log(this.addGames.value)
    var response = this.games.addGame(this.addGames.value)
    response.subscribe(res => {
      console.log(res)
      this.errorMessage = res['message']
    })
  }

}
