import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  filmName: string = '';
  filmView: string = 'table';

  filmViews= [
    {value: 'table', viewValue: 'Таблиця'},
    {value: 'list', viewValue: 'Список'}
  ];

  @Output() 
    getFilmName: EventEmitter<string> = new EventEmitter<string>();

  @Output()
    getFilmView: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }
  
  getFilms(filmName: string): void {
    this.getFilmName.emit(filmName);
  }

  getView(filmView: string){
    this.getFilmView.emit(filmView);
    console.log(filmView);
  }
}
