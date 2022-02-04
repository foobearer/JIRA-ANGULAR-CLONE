import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsHeaderComponent } from './shared/components/boards-header/boards-header.component';
import { BoardsSidebarComponent } from './shared/components/boards-sidebar/boards-sidebar.component';
import { BoardsToolbarComponent } from './shared/components/boards-toolbar/boards-toolbar.component';


@NgModule({
  declarations: [BoardsComponent, BoardsHeaderComponent, BoardsSidebarComponent, BoardsToolbarComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
