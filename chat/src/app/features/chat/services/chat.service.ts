import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { MessagesMock } from 'src/mocks/MessagesMock';

import { environment } from 'src/environments/environment';
import { Room } from '../models/Room';
import { Message } from '../models/Message';

@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  public WEBSOCKET = {
    connect: (userId: number) =>
      new WebSocket(`${environment.websocket}?userId=${userId}`),
  };

  public GET = {
    rooms: () =>
      this.http
        .get<{ data: Room[] }>(`${environment.api}/chat/rooms`)
        .pipe(map((r) => r.data)),
    messages: (roomId: number) =>
      this.http
        .get<{ data: Message[] }>(`${environment.api}/chat/messages`)
        .pipe(map((r) => r.data)),
  };

  public POST = {
    message: (content: string, roomId: number) =>
      this.http
        .post<{ data: Message }>(`${environment.api}/chat/messages/${roomId}`, {
          content,
        })
        .pipe(map((r) => r.data)),
  };
}
