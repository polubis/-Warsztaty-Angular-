import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import WebSocket from "websocket";
import { Server } from "http";

import { chatController } from "./controllers";

import { parseFailure } from "./utils";
import { connectionsService } from "./services";

export default class App {
  private createApp() {
    const app: Application = express();

    app.set("port", process.env.PORT || 8080);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(
      cors({
        origin: process.env.origin || "http://localhost:4200",
      })
    );

    app.use("/api/chat", chatController);

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      parseFailure(error, res);
    });

    return app;
  }

  private createServer(app: Application) {
    return app.listen(app.get("port"), async () => {
      console.log(
        `Service running at port ${app.get("port")} in ${app.get("env")} mode`
      );
      console.log("Date: ", new Date().toDateString());
    });
  }

  private createWebsocketServer(server: Server) {
    const wsServer = new WebSocket.server({
      httpServer: server,
    });

    wsServer.on("request", connectionsService.connect);
  }

  public async start() {
    const app = this.createApp();
    const server = this.createServer(app);
    this.createWebsocketServer(server);

    return Promise.resolve(server);
  }
}

// import express, { Application, Request, Response, NextFunction } from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import http from 'http';
// import WebSocket from 'websocket';

// import { parseFailure } from './utils/response-management/response-parsers';
// import WebsocketController from './controllers/WebsocketController';
// import WebsocketService from './services/WebsocketsService';

// class App {
//     private async createApp(): Promise<Application> {
//         const app: Application = express();

//         const PORT = process.env.PORT || 1111;

//         app.set('port', PORT);
//         app.use(bodyParser.json());
//         app.use(bodyParser.urlencoded({ extended: true }));
//         app.use(cors());

//         app.use('/api', WebsocketController);

//         app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//             parseFailure(error, res);
//         });

//         return Promise.resolve(app);
//     }

//     private async createServer(app: Application): Promise<http.Server> {
//         const server = http.createServer(app);
//         server.listen(app.get('port'), async () => {
//             console.log(Service running at port ${app.get('port')} in ${app.get('env')} mode);
//             console.log('Date: ', new Date().toDateString());
//         });

//         return Promise.resolve(server);
//     }

//     private async createWebsocketServer(server: http.Server): Promise<void> {
//         const wsServer = new WebSocket.server({
//             httpServer: server
//         });

//         wsServer.on('request', WebsocketService.manageConnectionCreation);

//         return Promise.resolve();
//     }

//     public async start(): Promise<void> {
//         const app = await this.createApp();
//         const server = await this.createServer(app);
//         await this.createWebsocketServer(server);

//         return Promise.resolve();
//     }
// }

// export default new App();

// import WebSocket from 'websocket';

// import AuthorizationManagementService from './AuthorizationManagementService';
// import ConnectionsManagementService from './ConnectionsManagementService';
// import CommentsManagementService from './CommentsManagementService';
// import RoomsManagementService from './RoomsManagementService';

// import { WebsocketMessagePayload } from '../models/payloads';
// import { WebsocketActions, WebsocketRequestQueryParams, WebsocketServiceConnection } from '../models/websocket';

// class WebsocketService {
//     public connections: WebsocketServiceConnection[] = [];

//     private manageMessages = (connection: WebSocket.connection): void => {
//         connection.on('message', message => {
//             if (message.type === 'utf8') {
//                 const payload: WebsocketMessagePayload = JSON.parse(message.utf8Data);

//                 switch (payload.action) {
//                     case WebsocketActions.CONNECTION_REMOVED:
//                         this.connections = ConnectionsManagementService.removeConnection(this.connections, payload.connectionIdx);
//                         break;
//                     case WebsocketActions.SWITCH_HUB:
//                         this.connections = ConnectionsManagementService.switchHub(this.connections, payload.connectionIdx, payload.hubId);
//                         break;
//                     case WebsocketActions.JOIN_ROOM:
//                         this.connections = RoomsManagementService.joinRoom(this.connections, payload.connectionIdx, payload.liveChatId);
//                         break;
//                     case WebsocketActions.LEAVE_ROOM:
//                         this.connections = RoomsManagementService.leaveRoom(this.connections, payload.connectionIdx);
//                         break;
//                     case WebsocketActions.INIT_TYPING_INFO:
//                         CommentsManagementService.sendInitTypingInfo(this.connections, payload.liveChatId, payload.commentId, payload.author);
//                         break;
//                     case WebsocketActions.FINISH_TYPING_INFO:
//                         CommentsManagementService.sendFinishTypingInfo(this.connections, payload.liveChatId, payload.authorId, payload.commentId);
//                         break;
//                     default:
//                         break;
//                 }
//             }
//         });
//     }

//     public manageConnectionCreation = async (request: WebSocket.request): Promise<void> => {
//         const { sessionId, hubId }: WebsocketRequestQueryParams = request.resourceURL.query as any;
//         const connection = request.accept(undefined, request.origin);

//         try {
//             const authorizationResponse = await AuthorizationManagementService.authorize(sessionId);
//             this.connections = ConnectionsManagementService.createConnection(this.connections, authorizationResponse, connection, +hubId);
//             this.manageMessages(connection);
//         }
//         catch (err) {
//             this.connections = this.connections;
//         }

//         return Promise.resolve();
//     }
// }

// export default new WebsocketService();

// import WebSocket from 'websocket';

// import BaseManagementService from './BaseManagementService';

// import { AuthorizationResponse } from '../models/others/AuthorizationResponse';
// import { CreateConnectionDto } from '../models/dtos';
// import { WebsocketServiceConnection, WebsocketActions } from '../models/websocket';

// class ConnectionsManagementService extends BaseManagementService {
//     public createConnection = (
//         connections: WebsocketServiceConnection[],
//         authorizationResponse: AuthorizationResponse,
//         connection: WebSocket.connection,
//         hubId: number
//     ): WebsocketServiceConnection[] => {
//         if (super.isInvalid(authorizationResponse, authorizationResponse.id, authorizationResponse.fullName, hubId)) return connections;

//         const connectionsLength = connections.length;
//         const connectionIdx = connectionsLength === 0 ? 0 : connections[connectionsLength - 1].connectionIdx + 1;

//         const newConnections = [...connections, { connection, userId: authorizationResponse.id, fullName: authorizationResponse.fullName, connectionIdx, hubId }];

//         super.send<CreateConnectionDto>(
//             newConnections,
//             (c) => c.connectionIdx === connectionIdx,
//             { type: WebsocketActions.CONNECTION_CREATED, data: { connectionIdx, userId: authorizationResponse.id, hubId } }
//         );

//         return newConnections;
//     }

//     public removeConnection = (connections: WebsocketServiceConnection[], connectionIdx: number): WebsocketServiceConnection[] => {
//         if (super.isInvalid(connectionIdx)) return connections;

//         return connections.filter(c => c.connectionIdx !== connectionIdx);
//     }

//     public switchHub = (connections: WebsocketServiceConnection[], connectionIdx: number, hubId: number): WebsocketServiceConnection[] => {
//         if (super.isInvalid(connectionIdx, hubId)) return connections;

//         const newConnections = [...connections];

//         const foundIndex = newConnections.findIndex(c => c.connectionIdx === connectionIdx);

//         if (foundIndex !== -1) {
//             newConnections[foundIndex].hubId = hubId;
//         }

//         return newConnections;
//     }
// }

// export default new ConnectionsManagementService();

// import { WebsocketServiceConnection } from "../models/websocket";

// class BaseManagementService {
//     protected send<T>(connections: WebsocketServiceConnection[], shouldSendCallback: (connection: WebsocketServiceConnection) => boolean, dto: T): void {
//         const parsedData: string = JSON.stringify(dto);

//         connections.forEach(websocketServiceConnection => {
//             const shouldSend: boolean = shouldSendCallback(websocketServiceConnection);
//             if (shouldSend) {
//                 websocketServiceConnection.connection.sendUTF(parsedData);
//             }
//         });
//     }

//     protected isInvalid(...args: any[]): boolean {
//         for (let i = 0; i < args.length; i++) {
//             if (args[i] === undefined) {
//                 return true;
//             }
//         }

//         return false;
//     }
// }

// export default BaseManagementService;
