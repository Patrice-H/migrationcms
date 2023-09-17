import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() activePage;
  loginView!: boolean;
  logSignView!: boolean;
  signupView!: boolean;

  constructor(private router: Router) {
    const path =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
    this.activePage = path;
  }

  ngOnInit(): void {
    this.loginView = false;
    const pages = ['home', 'docs', 'contact'];
    if (pages.includes(this.activePage)) {
      this.logSignView = false;
    } else {
      this.logSignView = true;
    }
  }
  display(s: string): void {
    if (
      s === 'account' ||
      s === 'services' ||
      s === 'forum' ||
      s === 'messaging'
    ) {
      this.logSignView = true;
    }
  }
  reset(): void {
    this.logSignView = false;
    this.loginView = false;
    this.signupView = false;
  }
  routing(route: string): void {
    route === 'signUp' ? this.stepSign() : this.stepLog();
  }
  stepLog(): void {
    this.logSignView = false;
    this.loginView = true;
  }
  stepSign(): void {
    this.logSignView = false;
    this.signupView = true;
  }
}
