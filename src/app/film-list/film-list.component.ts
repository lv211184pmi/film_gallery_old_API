import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[];
  filmName : string;
  viewFilm : string = 'film-card-table';

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmList = [];
    this.filmName = "Matrix";
    this.getFilms(this.filmName);
  }
  
  getFilmName(filmName: string): void {
    this.filmName = filmName; 
    this.getFilms(this.filmName);  
  }

  getFilmView(filmView: string){
    return (filmView == 'list') ? (this.viewFilm = 'film-card-list') : (this.viewFilm = 'film-card-table');
  }

  getFilms(filmName: string){
    this.filmCardService.getFilms(filmName).subscribe((filmsData: Object[]) => {
      this.filmList = (this.getFilmsData(filmsData)) ? filmsData : [];
    });
  }

  getNoFilms():boolean{
    return this.filmList && !this.filmList.length;
  }

  getFilmsData(filmsArray: any): boolean{
    return filmsArray && filmsArray.length;
  }

  addFilms() {
    this.filmCardService.getMoreFilms(this.filmName).subscribe((filmsData: Object[]) => {
      this.filmList = [...this.filmList, ...filmsData];
    })
  }
}
