import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { MenuService } from 'src/app/services/menu.service';

/**
 * Main menu
 * @class
 * @extends OnInit
 */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  isOpened!: boolean;
  chevronState!: string;
  buttonLabel!: string;
  @Input() activeTab = '';
  @Output() mainLink = new EventEmitter<string>();

  constructor(
    private router: Router,
    private storage: StorageService,
    private menu: MenuService
  ) {}

  ngOnInit(): void {
    this.isOpened = false;
    this.chevronState = 'down';
    const path =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
    this.activeTab = path;
    const activeTab = document.getElementById(this.activeTab);
    activeTab?.classList.add('active');
    this.buttonLabel = this.storage.isConnected() ? 'Déconnexion' : 'Connexion';
    this.menu.toggleChevron(this.chevronState);
    this.menu.toggleSubMenu(this.activeTab);
  }

  /**
   * @function
   * @description Emits the target value.
   * @param {MouseEvent} event - Trig on click
   * @param {string} target - Destination that the navigation should go to.
   */
  navigate(event: MouseEvent, target: string) {
    event.preventDefault();
    this.menu.navigate(this.mainLink, target);
  }

  /**
   * @function
   * @description Open or close submenu.
   */
  openCloseMenu(): void {
    this.isOpened = !this.isOpened;
    this.chevronState = this.isOpened ? 'up' : 'down';
    this.menu.toggleChevron(this.chevronState);
  }

  /**
   * @function
   * @description Log user in or out
   * @param {MouseEvent} event - Trig on click
   */
  logInOut(event: MouseEvent) {
    event.preventDefault();
    this.menu.logIn(this.mainLink);
    this.menu.switchLabel(this.buttonLabel);
  }
}
