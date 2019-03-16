import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { GamesService } from '../games.service';
import { MatchService } from '../matches.service';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  addGames = new FormGroup({
    game: new FormControl(''),
    status: new FormControl(''),
    hours: new FormControl(''),
    minutes: new FormControl(''),
    day: new FormControl(''),
    date: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    entry: new FormControl(''),
    prize: new FormControl(''),
  })
  gameIds = []
  dummyArray = []
  gameTypes = []
  hours = ['01','02','03','04','05','06','07','08','09','10','11','12']
  minutes = []
  date = []
  year = []
  month = ['01','02','03','04','05','06','07','08','09','10','11','12']
  day = ['AM','PM']
  result : any;
  errorMessage:any;

  constructor( private game : GamesService, private match : MatchService) {
    var d = new Date()

    for (var i = 0; i < 60;i++ ){
      var mod = i % 15;
      if ( mod == 0){
        this.minutes.push(i.toString())
      }
    }

    for (var j = d.getFullYear();j < 2050;j++){
      this.year.push(j)
    }

    for (var k = 1;k <32;k++){
      this.date.push(k)
    }
    var response = this.game.getAllGames()
    response.subscribe(res => {
      console.log(res)
      this.result = res
      var i = 0;
      for (let item in res){
        this.dummyArray.push(res)
        var key = Object.keys(res)[i]
        this.gameTypes.push(res[key].game)
        console.log('Key : '+key)
        this.gameIds.push(key)
        i = i + 1
      }
      console.log(this.gameIds)
      console.log(this.dummyArray)
    })
  }

  ngOnInit() {
  }

  addMatch(){
    console.log(this.addGames.value)
    var body = {
      gamename : this.addGames.value.game ,
      entryfee : this.addGames.value.entry,
      prizepool : this.addGames.value.prize,
      players: 'fghj',
      date: this.addGames.value.date+'/'+this.addGames.value.month+'/'+this.addGames.value.year,
      time: this.addGames.value.hours+':'+this.addGames.value.minutes+':'+this.addGames.value.day+':IST',
      game: '5c88e7cef26d51d8686984a2'
    }

    console.log(body)

    var response = this.match.addMatch(body)
    response.subscribe(res => {
      console.log(res)
    })
  }

}
