import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'components', loadChildren: () => import('./shared/components/components.module').then(m => m.ComponentsModule) },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'boards', loadChildren: () => import('./modules/boards/boards.module').then(m => m.BoardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }