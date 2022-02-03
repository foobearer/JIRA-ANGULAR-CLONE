import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_PATHS } from '@login/constants/url-paths';

@Component({
  selector: 'jp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', []);
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  login() {
    this.router.navigate([LOGIN_PATHS.BOARDS.BACKLOG]);
  }

}
