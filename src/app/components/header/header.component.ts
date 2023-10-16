import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

/**
 * @class
 * @description Header
 * @extends OnInit
 */
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
    this.activePage =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
  }

  /**
   * @function
   * @description Init component
   */
  ngOnInit(): void {
    this.display(this.activePage);
  }

  /**
   * @function
   * @description Display logSign component on specific pages if user isn't connected
   * @param {String} page
   */
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

  /**
   * @function
   * @description Reset all views
   */
  reset(): void {
    this.logSignView = false;
    this.loginView = false;
    this.signupView = false;
  }

  /**
   * @function
   * @description Switch route
   * @param {String} route - Step to connect / sign in
   */
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

  /**
   * @function
   * @description Step log in
   */
  stepLog(): void {
    this.logSignView = false;
    this.loginView = true;
  }

  /**
   * @function
   * @description Step sig in
   */
  stepSign(): void {
    this.logSignView = false;
    this.signupView = true;
  }

  /**
   * @function
   * @description Step connexion
   */
  connect(): void {
    this.reset();
    if (this.storage.isConnected()) {
      this.router.navigate([`/${this.activeLink}`]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
