import { Component, OnInit } from '@angular/core';
import { MatchService } from '../matches.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  matchesObj=[];
  constructor( private matches : MatchService) {
    var response = this.matches.getAllMatches();
    response.subscribe( result => {
      for(var i in result){
        console.log(result[i])
        this.matchesObj.push([i, result [i]]);
      }
      console.log(this.matchesObj)
    })
  }

  ngOnInit() {
  }

}
