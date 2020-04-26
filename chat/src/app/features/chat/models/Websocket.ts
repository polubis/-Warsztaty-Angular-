export enum WebsocketActions {
  CONNECTION_CREATED = 'CONNECTION_CREATED',
  JOIN_ROOM = 'JOIN_ROOM',
  SEND_MESSAGE = 'SEND_MESSAGE',
}

export interface WebsocketResponse {
  action: WebsocketActions;
  data: any;
}
