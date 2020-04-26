import WebSocket from "websocket";

export enum WebsocketActions {
  CONNECTION_CREATED = "CONNECTION_CREATED",
  JOIN_ROOM = "JOIN_ROOM",
  SEND_MESSAGE = "SEND_MESSAGE",
}

export interface Connection {
  id: number;
  userId: number;
  roomId?: number;
  websocketConnection: WebSocket.connection;
}
