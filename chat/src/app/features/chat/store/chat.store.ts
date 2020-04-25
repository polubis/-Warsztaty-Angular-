import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ChatService } from '../services/chat.service';
import { Room } from '../models/Room';
import { tap, mergeMap, filter } from 'rxjs/operators';

@Injectable()
export class ChatStore {
  private rooms = new BehaviorSubject<Room[]>([]);

  private activeRoom = new BehaviorSubject<Room | null>(null);

  public messages = new BehaviorSubject<any[]>([]);

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

  public fetchRooms = () => {
    this.chatService.GET.rooms()
      .pipe(
        tap((rooms) => {
          const room = !!rooms.length ? rooms[0] : null;
          this.rooms.next(rooms);
          this.activeRoom.next(room);
        }),
        filter(({ length }) => !!length),
        mergeMap((rooms) => this.fetchMessages(rooms[0].id))
      )
      .subscribe();
  };

  public changeRoom = (room: Room) => {
    this.activeRoom.next(room);
    this.fetchMessages(room.id).subscribe();
  };

  public addMessage = (content: string) => {
    this.chatService.POST.message(content)
      .pipe(
        tap((message) => {
          const messages = this.messages.getValue();
          this.messages.next([...messages, message]);
        })
      )
      .subscribe();
  };
}
