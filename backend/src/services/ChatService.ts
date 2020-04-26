import { connectionsService } from ".";
import { WebsocketActions } from "../models";

class ChatService {
  public connectionCreated = (connectionId: number) => {
    connectionsService.send((c) => c.id === connectionId, {
      action: WebsocketActions.CONNECTION_CREATED,
      data: { connectionId },
    });
  };

  public joinRoom = (connectionId: number, roomId: number) => {
    const connectionIdx = connectionsService.connections.findIndex(
      (c) => c.id === connectionId
    );

    if (connectionIdx !== -1) {
      connectionsService.connections[connectionIdx] = {
        ...connectionsService.connections[connectionIdx],
        roomId,
      };
    }
  };

  public sendMessage = (roomId: number, message: any) => {
    connectionsService.send((c) => c.roomId === roomId, {
      action: WebsocketActions.SEND_MESSAGE,
      data: message,
    });
  };
}

const chatService = new ChatService();

export { chatService };
