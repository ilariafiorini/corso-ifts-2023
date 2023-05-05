export interface IServer {
    name: string;
    id: number;
    status: ServerStatus;
  }
  
  export enum ServerStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    BOOTING = 'booting',
  }
  