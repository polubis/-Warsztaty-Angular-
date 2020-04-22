import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // Laduje kod zwiazany z ta funkcjonalnoscia dopiero po wejsciu na ten adres
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  // Laduje kod zwiazany z ta funkcjonalnoscia dopiero po wejsciu na ten adres
  {
    path: 'chat',
    loadChildren: () =>
      import('./features/chat/chat.module').then((m) => m.ChatModule),
  },
  // Gdy uzytkownik wejdzie na adres ktorego nie obsluzylismy - zostanie przekierowany na chat
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'chat',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
