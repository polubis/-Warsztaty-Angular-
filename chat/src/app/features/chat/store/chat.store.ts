import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ChatService } from '../services/chat.service';
import { Room } from '../models/Room';

@Injectable()
export class ChatStore {
  private rooms = new BehaviorSubject<Room[]>([]);

  private activeRoom = new BehaviorSubject<Room | null>(null);

  public messages = new BehaviorSubject<any[]>([]);

  public rooms$ = this.rooms.asObservable();

  public activeRoom$ = this.activeRoom.asObservable();

  public messages$ = this.messages.asObservable();

  constructor(private chatService: ChatService) {}

  public fetchRooms = () => {
    this.chatService.GET.rooms().subscribe(
      (rooms) => {
        this.rooms.next(rooms);
        this.activeRoom.next(!!rooms.length ? rooms[0] : null);
      },
      (error) => {
        // Obsluga bledow
      },
      () => {
        // Skonczenie nadawania
      }
    );
  };

  public changeRoom = (room: Room) => {
    this.activeRoom.next(room);
  };
}
