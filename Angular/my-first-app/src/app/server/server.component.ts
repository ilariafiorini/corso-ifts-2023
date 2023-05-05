import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerStatus } from '../server.model';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online { color: white; }', '.offline { color: black; }'],
})
export class ServerComponent {
  @Input() serverName: string = '';

  @Input() serverId: number = null;
  @Input() serverStatus: string = 'offline';

  @Output() removed = new EventEmitter<string>();

  constructor() {
    // this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    let color = 'grey';
    if (this.serverStatus === ServerStatus.ONLINE) {
      color = 'green';
    } else if (this.serverStatus === ServerStatus.OFFLINE) {
      color = 'red';
    }
    return color;
  }

  onReboot() {
    console.log('ServerComponent.reboot: ' + this.serverId);
    this.serverStatus = ServerStatus.BOOTING;
    
    setTimeout(() => {
      this.serverStatus = ServerStatus.ONLINE;
    }, 3000);
  }
  
  onRemove(){
    
    console.log('ServerComponent.remove: ' + this.serverId);
    this.removed.emit(this.serverName);
  }
}
