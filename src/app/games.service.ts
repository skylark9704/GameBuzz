import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})

export class GamesService {
  url : string ;
  constructor( private http : HttpClient, private cookie : CookieService, private db : DatabaseService) {
    this.url = this.db.getDbURL()
  }

  message(message: { message: string; }){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'api/welcome',message, { headers })
  }

  getAllGames(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.get(this.url+'api/games', { headers })
  }

  getGame(id: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.get(this.url+'api/game',id)
  }

  addGame(body : any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.post(this.url+'api/game/create',body)
  }

  deleteGame(id: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.post(this.url+'api/game/delete',{id})
  }
}
