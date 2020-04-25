# Warsztaty-Angular

## Czym jest Angular ?

Angular to framework pozwalający głównie na budowanie aplikacji `SPA` (posiada też wiele innych możliwości).

> **SPA (Single Page Application)** aplikacja, w której za wyświetlanie kontentu dla
> użytkownika odpowiada `JavaScript`. Pobieramy tylko jeden dokument `HTML` i podczas
> korzystania z aplikacji pobieramy potrzebne pliki `CSS`, `JavaScript`. Dane pobieramy
> uzywajac zapytan `HTTP` i wyswietlamy je wspomnianym `JavaScript`.

To jak dzialaja `SPA` mozna opisac ponizszymi krokami (duze uproszczenie):

- uzytkownik pobiera dokument `HTML`
- nastepnie przegladarka pobiera kod `JavaScript` oraz kod `CSS`

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Chat</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <!-- Tutaj dynamicznie Angular umieszcza komponenty podczas uzytkownia aplikacji, podmienia zawartosc -->
    <!-- Nadrzedny element -->
    <app-root></app-root>
    <script src="runtime.js" type="module"></script>
    <script src="polyfills.js" type="module"></script>
    <script src="styles.js" type="module"></script>
    <script src="vendor.js" type="module"></script>
    <script src="main.js" type="module"></script>
  </body>
</html>
```

## Krok 1 - dodanie routingu i usuniecie kodu startowego (dodanego domyslnie podczas tworzenia projektu)

> **Routing:** (Ogromne uproszczenie) Domyslnie przegladarka podczas zmiany adresu url
> wykonuje zapytanie i pobiera dokument html znajdujacy sie pod konkretna sciezka.
> W Angularze podczas zmiany adresu url wyswietlany jest komponent ktory zostal zmapowany ze
> sciezka. Wszystko obsluguje `JavaScript`.

W ponizszym przykladzie konfiguracja routingu. Przyklad zostal wzbogacony o technike
`Lazy loading` - leniwe ladowanie kodu. Czyli ladujemy kod danej funkcjonalnosci
wtedy kiedy go naprawde potrzebujemy. Po co nam kod strony glownej skoro uzywamy chatu.

Dodatkowo uzylismy `PreloadAllModules`. Pozwala to zaladowac kod pod konkretnym adresem url,
a jednoczesnie zaczac sciagac juz wszystkie moduly w tle. Tak, aby uzytkownik zmieniejac adres
url nie musial czekac na pobranie i kompilacje kodu.

```ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  // Laduje kod zwiazany z ta funkcjonalnoscia dopiero po wejsciu na ten adres
  {
    path: "",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
  },
  // Laduje kod zwiazany z ta funkcjonalnoscia dopiero po wejsciu na ten adres
  {
    path: "chat",
    loadChildren: () =>
      import("./features/chat/chat.module").then((m) => m.ChatModule),
  },
  // Gdy uzytkownik wejdzie na adres ktorego nie obsluzylismy - zostanie przekierowany na chat
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "chat",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Krok 2 - Implementacja statycznego layoutu - pierwsze komponenty

[Designy](https://dribbble.com/shots/7075625--Exploration-Grup-Chat-Messenger-To-Do-List-Integration?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=%23Exploration%20-%20Grup%20Chat%20Messenger%20-%20To%20Do%20List%20Integration&utm_medium=Social_Share)

Tworzenie komponentu: _ng g component features/chat_ - stworzy 4 pliki pod scieżka features/chat. Dodatkowo
doda tez stworzony komponent do tablicy `declarations` w `app.module`.

Zawsze przed napisaniem logiki funkcjonalnosci warto przygotowac `layout` czyli to jak
aplikacja ma wygladac. Dzieki temu pozniej latwiej jest namierzyc potencjalne bledy i testowac
napisana logike.

Na tym etapie nie istotna jest jakosc kodu. Dlatego wszystko znajduje sie w 1 komponencie.
Pozniej wraz ze wzrostem umiejetnosci warto odrazu dzielic kod na komponenty zeby oszczedzic czas.
Po napisaniu layotu, podpieciu logiki zawsze przychodzi czas na refactor. W takiej kolejnosci
powinna byc implementowana kazda funkcjonalnosc w dowolnej aplikacji.

Ponizej przykladowy komponent.
`selector` - definiuje nazwe komponentu, ktorej bedziemy uzywac jezeli chcemy go uzyc.
`templateUrl` - sciezka do templatki
`styleUrls` - sciezka do plikow ze stylami

```ts
@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.scss"],
})
export class ChatPageComponent implements OnInit {}
```

## Krok 3 - Implementacja logiki i mockowanie danych

W Angularze logike biznesowa mozemy obsluzyc na wiele sposobow. Dane mozemy pobierac
bezposrednio w komponentach i przypisywac je do zmiennych, ktore sa `bindowane` z templatka.
Zmiana wlasciwosci klasy spowoduje naniesienie zmian w widoku. Przy kazde zmianie wlasciwosci
uruchamiamy proces `ChangeDetection` - uzywamy domyslnego. Pozniej bedzie o `OnPush` i `changeDetectionRef`.

Jednak obsluga calej logiki biznesowej w komponentach niesie za soba pewne ryzyko. Ciezko jest te
dane wspoldzielic. Dodatkowo przekazywanie ich do komponentow `dzieci` powoduje powstawanie
nadmiernego kodu. Ciezko tez sledzic przeplyw danych.

Dlatego do propagowania danych wykorzystuje sie serwisy. Aby zarejestrowac serwis - stworzyc jego instancje
i umozliwic wstrzykiwanie nalezy dodac go do tablicy `providers` w komponencie badz module. Nalezy pamietac
zeby serwis oznaczyc dekoratorem `Injectable`.

```ts
@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  public GET = {
    rooms: () => of(RoomsMock.splice(0, 20)).pipe(delay(1500)),
    messages: () => of(MessagesMock.splice(0, 5)).pipe(delay(1500)),
  };
}
```

Serwis mozna zarejestrowac tez globalnie - stworzyc jedna instancje dla calej aplikacji `Singleton` poprzez
uzycie lub dodanie go do `providers` w module glownym aplikacji.

```ts
@Injectable({ providedIn: "root" })
```

### Serwis w Angularze, a w rozumieniu ogolnym ?

Otoz w Angularze `serwis` to poprostu skladowa frameworka. Tak jak komponenty, dyrektywy. Jendak w swiecie FE
przyjelo sie tez ze serwis to poprostu plik w ktorym trzymamy funkcje pozwalajace na wykonanie zapytan.
Dlatego stworzylem `chat.service` - ktory odpowiada za wykonywanie zapytan oraz `chat.store` - za logike biznesowa i obsluga zapytan. Plik z serwisem stworzylem w celu pokazania roznicy pomiedzy pojeciami.

W Angularze serwisem jest taka klasa, ktora uzywa dektoratora `Injectable`.

### RxJs

Angular wykorzystuje biblioteke RxJs w wielu miejscach. Ma ona za zadanie ulatwic obsluge asynchronicznego
kodu oraz zdarzen w przegladarce. Zamiast wywolywac `Promise.then` w Angularze uzywa sie `subscribe`.

RxJs to bardzo szeroki temat i jedna z najtrudniejszych bibliotek wedlug rankingow. Trzeba przestawic myslenie.

RxJs implementuje wzorzec obserwatora z kilkoma modyfikacjami - nie trzyma listy `subskrybentow`.

Jak dziala ?

Idea jest dosyc prosta. Wyobraz sobie przycisk `subscribe` w serwisie `Youtube`. Jezeli chcesz otrzymywac
notyfikacje to klikasz przycisk, a jezeli nie to wylaczasz `subskrypcje`. Analogicznie zaimplementowany jest
RxJs.

Mamy `Observable` czyli obiekt obserwowany - analogia do autora na `yt` oraz `subscribe` - analogia do przycisku.
`Observable` to strumien danych. Moze byc to cokolwiek. Tablica `string`, `number`, itp.
`Observable` emituje wartosci tylko wtedy gdy podlaczymy sie do strumienia `subscribe`. Po podlaczeniu sie
zostaje zwrocona `Subscription` - mozemy anulowac w dowolnym momencie wykonywany kod. Zeby odlaczyc sie
od dostawania "powiadomien" nalezy wywolac metode `unsubscribe`.

`Observable` stworzony np z eventu za pomoca `fromEvent()` - jest `cold`. Oznacza to tyle, ze zaczyna on emitowac
wartosci tylko i wylacznie po podlaczeniu. Kazdy kolejny subskrybent nie bedzie posiadal dostepu
do wyemitowanych wczesniej wartosci.

`BehaviourSubject, Subject, ReplaySubject` sa `hot`. Oznacza to tyle, ze strumien jest wspoldzielony dla kazdego
subskrybenta. Dzieki temu kazdy posiada dostep do tych samych danych wewnatrz strumienia. `Hot` mowi tez o tym,
ze mozemy do tego strumienia dodawac dane oraz je odbierac czego nie mozemy robic w przypadku chociazby `fromEvent` czy stworzonego za pomoca operatora `of`.

Mozemy przeksztalcic `Observable` z `cold` na `hot` za pomoca operatorow `share, shareReplay`. Wtedy
kazdy kolejny subskrybent bedzie korzystal z tego samego strumienia co 1.

Potega RxJs tkwi w `operatorach`. Mozemy je dorzucac do metody `pipe`. Operatory pozwalaja
na definiowanie tego co ma sie dziac ze strumieniem podczas otrzymywania nowych danych wewnatrz.

Przyklad:

```ts
public fetchRooms = () => {
    // Zapytanie do API - dopoki nie wywolamy subscribe - nic sie nie stanie
    this.chatService.GET.rooms()
      .pipe(
        tap((rooms) => {
          // Operator tap powinien byc uzywany do obslugi Side Effects
          // W tym przypadku po otrzymaniu odpowiedzi z API - ustawia dane
          const room = !!rooms.length ? rooms[0] : null;
          // .next jest to metoda udostepniona przez Subjecty. Pozwala wemitowac nowe dane do strumienia
          // kazdy subskrybent dostanie je
          this.rooms.next(rooms);
          this.activeRoom.next(room);
        }),
        // Filter pozwala zablokowac dalszy kod. Oznacza to tyle, ze
        // jezeli dlugosc listy pokoi bedzie rowna 0 - to nie powinnismy strzelac po wiadomosci
        filter(({ length }) => !!length),
        // Pozwala zmapowac wartosc strumienia na kolejny observable
        // Moglibsmy zrobic zagniezdzenie jak przypadku callbackow czy promises,
        // ale w RxJs jest to antypattern. Nie mozemy zagniezdzac subscribe.
        // Do tego mamy specjalne operatory
        mergeMap((rooms) => this.fetchMessages(rooms[0].id))
      )
      .subscribe();
};
```

Jak pewnie widac wyzej uzylem `mergeMap` do wykonania zapytania do `API`. `mergeMap` pozwala na
uzycie metody `subscribe` za Ciebie. Dziala to w ten sposob.

1. Pobralismy liste pokoi.
2. Doszlismy do operatora `mergeMap` - wywolal on metode `subscribe` i wykonalismy zapytanie do API.

Mamy jeszcze kilka innych operatorow mapowania strumienia na inny strumien.
`switchMap` - jezeli zostanie wyemitowana wartosc ze sturmienia nadrzednego - nowa, a aktualnie
trwa emisja danych (np strzal do API) - to wtedy zostanie ona porzucona i podlaczymy sie do nowej.
Przyklad - uzytkownik zmienia filtry w aplikacji. 1 zmiana trwa 10s nastepnie zmienil zdanie. Kliknal
na kolejne filtry, ale te przyszly przed wczesniejszymi. Normalnie bez tego operatora zobaczylibysmy nowe filtry i nagle zmiane na stare. Dzieki RxJs podczas zmiany filtrow - przestajemy brac pod uwage stara odpowiedz.
Odlaczamy sie od niej.

[Jak dzialaja operatory - wyjasnione wizualnie](https://rxmarbles.com/)
[Szczegolowy kurs](https://rxjs-dev.firebaseapp.com/guide/overview)

## Krok 4 - Dodanie obslugi pobierania wiadomosci

Dodalismy do naszego `chat.store` nowy `BehaviourSubject`. Ma to byc strumien trzymajacy
nasze wiadomosci dla aktualnie wybranego chatu. Uzywamy go w komponencie do wyswietlenia danych
w momencie gdy sie zmienia. Odpowiada za to jak wczesniej pipe `| async`.

## Krok 5 - Dodanie customowego pipe do filtrowania pokoi

Pipe to nic innego jak funkcja, ktora jest wywolywana na danych - przeksztalca je w cos lub
wywoluje efekty uboczne podczas pojawienia sie nowych. Rozni sie jednak tym, 
ze mozemy ustawic to w jaki sposob ma reagowac na dane wejsciowe. `Pipe` jest domyslnie 
`pure`. Oznacza to, ze kod zostanie wywolany wtedy kiedy zmienia sie parametry wejsciowe.
Referencja w pamieci w przypadku typow zlozonych lub zmiana wartosci dla typow prymitywnych.
Daje to przewage nad zwykla funkcja napisana w klasie i wywolana w templatce. Mechanism ten
mozemy wylaczyc

```ts
@Pipe({ name: 'filterRooms', pure: false })
```

Pipe wywolujemy w nastepujacy sposob:

```ts
*ngFor="let room of rooms | filterRooms: roomsSearchPhrase"
```

Przed iteracja po tablicy `rooms` - zostanie zastosowany filtr. Po znaku `:` przekazujemy kolejno parametry.

[Pipe](https://angular.io/guide/pipes)



## Angular i Custom Elements

Angular wykorzystuje mozliwosc tworzenia customowych znacznikow `HTML`. Dzieki temu w dokumencie
mozemy zobaczyc odpowiedniki naszych komponentow w drzewie `DOM`.

Angular przeksztalca nasze komponenty do `Custom Element` w nastepujacy sposob:

- buduje klase komponentu
- rejestruje ja - wiaze klase z nazwa znacznika
- umieszcza znacznik, komponent w drzewie `DOM`
