import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фільмів';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Головна'},
    { path: '/filmList', icon: 'list', label: 'Всі фільми'},
    { path: '/profile', icon: 'assignment_ind', label: 'Профіль'}
  ];

}
