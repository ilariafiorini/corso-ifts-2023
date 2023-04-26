import { Component } from '@angular/core';

@Component({
  selector: '[app-server-list]',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  buttonColor = 'blue';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    console.log('ServerListComponent.onCreateServer()');
    this.serverCreationStatus = 'Server created!';
  }

  onMouseOver() {
    console.log('ServerListComponent.onMouseOver()');
    this.buttonColor = 'red';
  }

  onMouseOut() {
    console.log('ServerListComponent.onMouseOut()');
    this.buttonColor = 'blue';
  }

  /*
  onUpdateServerName(event: Event) {
    console.log('ServerListComponent.onUpdateServerName()', event);
    // this.serverName = (<HTMLInputElement>event.target).value;
    // nuova sintassi a partire da Typescript >= 1.6.x
    this.serverName = (event.target as HTMLInputElement).value;
  }
  */
}