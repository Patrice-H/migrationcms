import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

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
  activeLink!: string;

  constructor(private router: Router, private storage: StorageService) {
    const path =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
    this.activePage = path;
  }

  ngOnInit(): void {
    this.display(this.activePage);
  }
  display(page: string): void {
    this.activeLink = page;
    if (
      (page === 'account' ||
        page === 'services' ||
        page === 'forum' ||
        page === 'messaging') &&
      !this.storage.isConnected()
    ) {
      this.logSignView = true;
    } else {
      this.router.navigate([`/${this.activeLink}`]);
    }
  }
  reset(): void {
    this.logSignView = false;
    this.loginView = false;
    this.signupView = false;
  }
  routing(route: string): void {
    switch (route) {
      case 'signUp':
        this.stepSign();
        break;
      case 'logIn':
        this.stepLog();
        break;
      case 'account':
        this.connect();
        break;
      default:
        break;
    }
  }
  stepLog(): void {
    this.logSignView = false;
    this.loginView = true;
  }
  stepSign(): void {
    this.logSignView = false;
    this.signupView = true;
  }
  connect(): void {
    this.reset();
    if (this.storage.isConnected()) {
      this.router.navigate([`/${this.activeLink}`]);
      console.log('connecté');
    } else {
      console.log('déonnecté');
      this.router.navigate(['/']);
    }
  }
}
