import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from '@login/components/login';
import { ProjectGeneratorComponent } from '@login/components/project-generator';
import { TeamInvitationComponent } from '@login/components/team-invitation';
import { LoginFormComponent } from '@login/components/login-form';
import { SharedModule } from '@shared/modules/shared';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import


@NgModule({
  declarations: [LoginComponent, ProjectGeneratorComponent, TeamInvitationComponent, LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }
