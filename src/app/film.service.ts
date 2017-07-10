import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmService {
  url: string = "http://www.omdbapi.com";
  apiKey: string = "520bbe17";
  page: number = 1;
  
  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    body = body.Search || body;
    return body || {};
  }

  getReq(url: string): Observable<any> {
    return this.http.get(url).map(this.extractData);
  }

  getFilms (filmName: string) {
    return this.getReq(`${this.url}/?page=1&s=${filmName}&apiKey=${this.apiKey}`);
  }

  getFilmById (filmId: string) {
    return this.getReq(`${this.url}/?i=${filmId}&apiKey=${this.apiKey}`);
  }

  getMoreFilms(filmName: string){
    this.page++;
    return this.getReq(`${this.url}/?page=${this.page}&s=${filmName}&apiKey=${this.apiKey}`);
  }
}