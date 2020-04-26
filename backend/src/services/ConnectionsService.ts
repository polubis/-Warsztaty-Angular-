import WebSocket from "websocket";

import { Connection, WebsocketActions } from "../models";
import { chatService } from "./ChatService";

class ConnectionsService {
  public connections: Connection[] = [];

  private disconnect = (id: number) => {
    this.connections = this.connections.filter((c) => c.id !== id);
  };

  public send<T>(
    shouldSendCallback: (connection: Connection) => boolean,
    dto: T
  ): void {
    const parsedData: string = JSON.stringify(dto);

    this.connections.forEach((connection) => {
      const shouldSend: boolean = shouldSendCallback(connection);

      if (shouldSend) {
        connection.websocketConnection.sendUTF(parsedData);
      }
    });
  }

  public connect = (request: WebSocket.request) => {
    const { userId } = request.resourceURL.query as any;

    const connection: Connection = {
      id: 0,
      userId: +userId,
      websocketConnection: request.accept(undefined, request.origin),
    };

    const id = this.connections.push(connection);

    connection.id = id;

    const { websocketConnection } = connection;

    websocketConnection.on("error", () => {
      this.disconnect(connection.id);
    });

    websocketConnection.on("close", () => {
      this.disconnect(connection.id);
    });

    websocketConnection.on("message", (message) => {
      if (message.type === "utf8") {
        const payload = JSON.parse(message.utf8Data);

        switch (payload.action) {
          case WebsocketActions.JOIN_ROOM:
            chatService.joinRoom(payload.data.connectionId, payload.data.roomId);
            break;
          default:
            break;
        }
      }
    });

    chatService.connectionCreated(connection.id);
  };
}

const connectionsService = new ConnectionsService();

export { connectionsService };
