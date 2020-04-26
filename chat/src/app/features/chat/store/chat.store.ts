import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, mergeMap, filter } from 'rxjs/operators';

import { ChatService } from '../services/chat.service';
import { Room } from '../models/Room';
import { Message } from '../models/Message';
import { WebsocketResponse, WebsocketActions } from '../models/Websocket';

@Injectable()
export class ChatStore {
  private connectionId: number;

  private connection: WebSocket;

  private rooms = new BehaviorSubject<Room[]>([]);

  private activeRoom = new BehaviorSubject<Room | null>(null);

  public messages = new BehaviorSubject<Message[]>([]);

  public rooms$ = this.rooms.asObservable();

  public activeRoom$ = this.activeRoom.asObservable();

  public messages$ = this.messages.asObservable();

  constructor(private chatService: ChatService) {}

  private fetchMessages = (roomId: number) => {
    this.messages.next([]);

    return this.chatService.GET.messages(roomId).pipe(
      tap((messages) => {
        this.messages.next(messages);
      })
    );
  };

  private createWebsocketConnection = () => {
    this.connection = this.chatService.WEBSOCKET.connect(1);
  };

  private onWebsocketMessage = () => {
    this.connection.onmessage = (e) => {
      const { action, data } = JSON.parse(e.data) as WebsocketResponse;

      if (action === WebsocketActions.CONNECTION_CREATED) {
        this.connectionId = data.connectionId;
        this.sendToWebsocket({
          action: WebsocketActions.JOIN_ROOM,
          data: {
            connectionId: this.connectionId,
            roomId: this.activeRoom.getValue().id,
          },
        });
      } else if (action === WebsocketActions.SEND_MESSAGE) {
        const message: Message = data;
        const messages = this.messages.getValue();
        this.messages.next([...messages, message]);
      }
    };
  };

  private sendToWebsocket = (payload: any) => {
    if (this.connection && this.connection.readyState === WebSocket.OPEN) {
      this.connection.send(JSON.stringify(payload));
    }
  };

  public fetchRooms = () => {
    this.chatService.GET.rooms()
      .pipe(
        tap((rooms) => {
          const room = !!rooms.length ? rooms[0] : null;
          this.rooms.next(rooms);
          this.activeRoom.next(room);
          this.createWebsocketConnection();
          this.onWebsocketMessage();
        }),
        filter(({ length }) => !!length),
        mergeMap((rooms) => this.fetchMessages(rooms[0].id))
      )
      .subscribe();
  };

  public changeRoom = (room: Room) => {
    this.activeRoom.next(room);

    this.fetchMessages(room.id)
      .pipe(
        tap(() => {
          this.sendToWebsocket({
            action: WebsocketActions.JOIN_ROOM,
            data: {
              roomId: room.id,
              connectionId: this.connectionId,
            },
          });
        })
      )
      .subscribe();
  };

  public addMessage = (content: string) => {
    this.chatService.POST.message(
      content,
      this.activeRoom.getValue().id
    ).subscribe();
  };
}
