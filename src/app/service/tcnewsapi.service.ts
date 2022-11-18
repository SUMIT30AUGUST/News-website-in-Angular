import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) { }

  //top Headlines API URL
  topHeadLinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b17077b49f4c4043a3e97c5e04049f1c'

  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b17077b49f4c4043a3e97c5e04049f1c'

//Use tech methods
tcTechNews():Observable<any>{
  return this._http.get(this.techNews)
}


  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadLinesNews)
  }
}
