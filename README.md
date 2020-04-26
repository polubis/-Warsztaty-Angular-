# Słownik pojęć

# SPA (Single Page Application)

Aplikacja, w której za wyświetlanie kontentu dla użytkownika odpowiada `JavaScript`.
Pobieramy tylko jeden dokument `HTML` i podczas korzystania z aplikacji pobieramy potrzebne pliki `CSS`,`JavaScript`. Dane pobieramy uzywajac zapytan `HTTP` i wyswietlamy je wspomnianym `JavaScript`.

# RxJs

[Świetny artykuł po Polsku z podstaw](https://www.angular.love/2018/07/04/rxjs-w-angular-co-wypada-wiedziec/)

## Observable

[Observable](https://rxjs-dev.firebaseapp.com/guide/observable)

Leniwe kolekcje, strumień danych do którego możemy się podłączyć. Implementacja wzroca
`obserwator`.

```ts
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // Subskrybent otrzyma 3 wartosci 1,2,3 oraz po 1 sekundzie wartosci 4. Nastepnie zostanie wyemitowany
  // event complete
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("just after subscribe");
```

## Operatory RxJs'a

[Operatory](https://rxjs-dev.firebaseapp.com/guide/operators)

Są to zwykłe funkcje, które operują na wartościach w strumieniu `Observable`. Można wyróżnić 2 kategorie.

- `pipeable operators` - wykonuja operacje na wartościach strumienia nie zmieniając utworzonej instancji

- `creation operators` - operatory, które pozwalają storzyć nowy `Observable` na podstawie argumentów

```ts
import { of } from "rxjs"; // creation operators
import { filter, map } from "rxjs/operators"; // pipeable operators

const obs = of([1, 2, 3]).pipe(
  map((v) => v + 2),
  filter((v) => v > 3)
);

obs.subscribe((v) => console.log(v)); // [4, 5]
```

## Subscription

[Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription)

`Subscription` to obiekt zwrocony po podlaczeniu sie do `Observable`. Obiekt ten posiada funkcje `unsubscribe`.
W momencie kiedy nie potrzebujemy nasłuchiwania na zmiane danych należy wywołac wspomnianą metodę. Inaczej
doprowadzi to do wycieku pamięci.

```ts
import { of } from "rxjs";

const obs = of([1, 2, 3]);

const sub = obs.subscribe((v) => console.log(v)); // [4, 5]
```

```ts
import { Component, OnInit } from '@angular/core';

import { ChatStore } from './store/chat.store';

import { Room } from './models';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  public rooms: Room[] = [];

  private subscriptions = new Subscription();

  constructor(private chatStore: ChatStore) {}

  ngOnInit() {
    this.subscriptions.add(
      this.chatStore.rooms$.subscribe(
        rooms => {
          this.rooms = rooms;
        }
      );    
    )
  }

  ngOnDestroy() {
    // Jezeli bysmy tego nie zrobili po odmontowaniu komponentu - pojawi sie wyciek pamieci
    this.subscriptions.unsubscribe();
  }
}

```

## Subjects 

[Subjects](https://rxjs-dev.firebaseapp.com/guide/subject)

Specjalny rodzaj `Observable`. Pozwala na udostępnianie wartości wielu subskrybentom. Dodatkowo
możemy emitować nowe wartości, a wszyscy subskrybenci je otrzymają. Można wyróżnić trzy rodzaje:

`Subject` - nie zapamiętuja poprzednich wartości. Jezeli wczesniej emitowane byly jakiekolwiek to po podłączeniu
się nowych subskrybentów - nie dostaną one tych wartości.

`BehaviourSubject` - emituje 1 poprzednią wartość. Pozwala także ustawić początkową. Emituje wartość odrazu po podłączeniu się - ta zapamiętaną.

`ReplaySubject` - emituje wszystkie wcześniejsze wartości po podłączeniu się nowych subskrybentów.