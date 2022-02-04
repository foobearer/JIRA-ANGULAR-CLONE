import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './boards.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'backlog',
    loadChildren: () => import('./views/backlog/backlog.module').then((m) => m.BacklogModule)
  },
  {
    path: 'active-sprint',
    loadChildren: () => import('./views/active-sprint/active-sprint-routing.module').then((m) => m.ActiveSprintRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }