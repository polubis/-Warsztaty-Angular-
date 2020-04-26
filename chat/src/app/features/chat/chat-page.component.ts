import { Component, OnInit } from '@angular/core';

import { ChatStore } from './store/chat.store';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  public rooms$ = this.chatStore.rooms$;

  public activeRoom$ = this.chatStore.activeRoom$;

  public messages$ = this.chatStore.messages$;

  public roomsSearchPhrase = '';

  public chatMessageContent = '';

  constructor(private chatStore: ChatStore) {}

  ngOnInit() {
    this.chatStore.fetchRooms();
  }

  public changeRoom = this.chatStore.changeRoom;

  public addMessage(e: any) {
    e.preventDefault();
    this.chatStore.addMessage(this.chatMessageContent);
    this.chatMessageContent = '';
  }
}
