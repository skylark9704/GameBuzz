import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [trigger('myAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
])
]
})
export class GamesComponent implements OnInit {
  gamesObj=[];
  constructor( private games : GamesService) {
    var response = this.games.getAllGames()
    response.subscribe( result => {
      for(var i in result){
        this.gamesObj.push([i, result [i]]);
      }
      console.log(this.gamesObj)
    })
  }

  ngOnInit() {
  }

}
