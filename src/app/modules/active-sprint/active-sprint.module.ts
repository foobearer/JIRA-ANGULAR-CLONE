import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveSprintRoutingModule } from './active-sprint-routing.module';
import { ActiveSprintComponent } from './active-sprint.component';


@NgModule({
  declarations: [ActiveSprintComponent],
  imports: [
    CommonModule,
    ActiveSprintRoutingModule
  ]
})
export class ActiveSprintModule { }
