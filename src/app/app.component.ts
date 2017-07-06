import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showImage: Array<boolean> = [true, true];

  displayImage(event) {
    let btnName: string = event.target.id;
    if (btnName == 'btn1') {
      return (this.showImage[0] = false) && (this.showImage[1] = true);
    } else if (btnName == 'btn2') {
      return (this.showImage[0] = true) && (this.showImage[1] = false);
    } else {
      return (this.showImage[0] = false) && (this.showImage[1] = false);
    }  
  }
}





