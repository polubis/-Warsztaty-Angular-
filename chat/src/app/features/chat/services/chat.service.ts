import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { RoomsMock } from 'src/mocks/RoomsMock';
import { MessagesMock } from 'src/mocks/MessagesMock';

@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  public GET = {
    rooms: () => of(RoomsMock.splice(0, 20)).pipe(delay(1500)),
    messages: (roomId: number) => of(MessagesMock).pipe(delay(1500)),
  };

  public POST = {
    message: (content: string) =>
      of({ ...MessagesMock[0], content }).pipe(delay(1500)),
  };
}
