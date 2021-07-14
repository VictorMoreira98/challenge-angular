import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-angular';
  boolImage = true

  receiverFeedback(event) {
    this.boolImage = !this.boolImage
  }
}
