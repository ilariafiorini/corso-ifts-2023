import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
  contatore: number = 0;
  pariODispari: string = '';

  faCoffee = faCoffee;


  timer$ = interval(1000);

  constructor() {
    this.timer$.subscribe((val) => {
      this.contatore = val;
      this.pariODispari = this.contatore % 2 === 0 ? 'pari' : 'dispari';
    });
  }
}
