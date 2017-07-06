import { Component, Input, OnInit } from '@angular/core';
import {FilmService} from '../film.service';
import {FilmItemView} from '../shared/filmItemView';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() filmId: string;

  @Input() filmView: string;
  
  private filmItem : Object;

  constructor(private filmItemService: FilmService){}

  ngOnInit() {
    this.getFilmsList();
  }
   
  
  getFilmsList(){
    if(this.filmId){
      this.filmItemService.getFilmById(this.filmId)
        .subscribe((data: Object) => {this.filmItem = data || {};
      })
    }
  }
}

