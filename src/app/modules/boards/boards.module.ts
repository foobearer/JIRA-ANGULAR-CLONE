import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsHeaderComponent } from './shared/components/boards-header/boards-header.component';


@NgModule({
  declarations: [BoardsComponent, BoardsHeaderComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
