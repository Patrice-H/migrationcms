import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MenuService } from 'src/app/services/menu.service';

/**
 * Burger Menu
 * @class
 * @extends OnInit
 */
@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit {
  buttonLabel!: string;
  @Output() burgerLink = new EventEmitter<string>();

  constructor(private storage: StorageService, private menu: MenuService) {}

  ngOnInit(): void {
    this.buttonLabel = this.storage.isConnected() ? 'Déconnexion' : 'Connexion';
  }

  /**
   * @function
   * @description Emits the target value.
   * @param {MouseEvent} event - Trig on click
   * @param {string} target - Destination that the navigation should go to.
   */
  navigate(event: MouseEvent, target: string) {
    event.preventDefault();
    this.menu.navigate(this.burgerLink, target);
  }

  /**
   * @function
   * @description Log user in or out
   * @param {MouseEvent} event - Trig on click
   */
  logInOut(event: MouseEvent) {
    event.preventDefault();
    this.menu.logIn(this.burgerLink);
    this.menu.switchLabel(this.buttonLabel);
  }
}
