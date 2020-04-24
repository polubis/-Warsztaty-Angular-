import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPageComponent } from './chat-page.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './services/chat.service';
import { ChatStore } from './store/chat.store';

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  // Dla modulu Chat - zostnie stworzona 1 instancja ponizszych serwisow
  // Pilnowac kolejnosci - ChatStore jest zalezny od ChatService
  providers: [ChatService, ChatStore]
})
export class ChatModule { }
