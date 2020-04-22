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

## Angular i Custom Elements

Angular wykorzystuje mozliwosc tworzenia customowych znacznikow `HTML`. Dzieki temu w dokumencie
mozemy zobaczyc odpowiedniki naszych komponentow w drzewie `DOM`.

Angular przeksztalca nasze komponenty do `Custom Element` w nastepujacy sposob:
- buduje klase komponentu
- rejestruje ja - wiaze klase z nazwa znacznika
- umieszcza znacznik, komponent w drzewie `DOM`

## Krok 1 - dodanie routingu i usuniecie kodu startowego (dodanego domyslnie podczas tworzenia projektu)

> **Routing:** Domyslnie przegladarka 
> would you load a massive mapping library for the parent route every time when
> the user may never go to that tab?

```js
import Loadable from "react-loadable";
import Loading from "./my-loading-component";

const LoadableComponent = Loadable({
  loader: () => import("./my-component"),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
```
[Designy](https://dribbble.com/shots/7075625--Exploration-Grup-Chat-Messenger-To-Do-List-Integration?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=%23Exploration%20-%20Grup%20Chat%20Messenger%20-%20To%20Do%20List%20Integration&utm_medium=Social_Share)