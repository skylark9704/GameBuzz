import { Component, OnInit } from '@angular/core';
import { MatchService } from '../matches.service';

@Component({
  selector: 'app-delete-matches',
  templateUrl: './delete-matches.component.html',
  styleUrls: ['./delete-matches.component.css']
})
export class DeleteMatchesComponent implements OnInit {

  matches;
  matchesArray = []
  players = []
  constructor( private match : MatchService) {
    var response = this.match.getAllMatches()
    response.subscribe(res => {
      console.log(res)
      this.matches = res
      var i;
      for (let items in res){
        this.matchesArray.push(items)
        var length=res[items].players.split(',')

        this.players.push(length.length)
      }

      console.log(this.matchesArray)
    })



  }

  ngOnInit() {
  }
  serialize(index){
    return index+1
  }

  delete(id){
    var response = this.match.removeMatch(id)
    response.subscribe(res => {
      console.log(res)
    })
  }



}
