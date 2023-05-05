import { Component } from '@angular/core';
import { IServer, ServerStatus } from '../server.model';

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
  serverWasCreated: boolean = false;

  serverList: IServer[] = [
    { name: 'Server 1', id: 10, status: ServerStatus.ONLINE },
    { name: 'Server 2', id: 20, status: ServerStatus.ONLINE },
    { name: 'Server 3', id: 30, status: ServerStatus.OFFLINE },
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  onCreateServer() {
    console.log('ServerListComponent.onCreateServer()');
    this.serverCreationStatus = 'Server created!';
    this.serverWasCreated = true;

    const newServer: IServer = {
      name: this.serverName,
      id: Math.floor(Math.random() * 1000) + 1,
      status: Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE,
    };
    this.serverList.push(newServer);
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

  onServerRemoved(name: string) {
    console.log('ServerListComponent.onServerRemoved(): ' + name);

    for (let i = 0; i < this.serverList.length; i++) {
      const server = this.serverList[i];
      if (server.name == name) {
        this.serverList.splice(i, 1);
        break;
      }
    }
  }
}
