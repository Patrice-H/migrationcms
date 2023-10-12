import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private router: Router, private storage: StorageService) {}

  switchLabel(label: string): string {
    if (label === 'Connexion') {
      return 'Déconnexion';
    }

    return 'Connexion';
  }

  logIn(event: EventEmitter<string>) {
    if (this.storage.isConnected()) {
      this.storage.disconnect();
      this.router.navigate(['/home']);
    } else {
      event.emit('account');
    }
  }

  navigate(event: EventEmitter<string>, link: string) {
    event.emit(link);
  }

  toggleChevron(state: string) {
    const chevron = document.getElementById('chevron');
    chevron?.setAttribute('class', '');
    chevron?.classList.add(state);
  }

  toggleSubMenu(tab: string) {
    const subMenu = document.getElementById('user-logo');
    subMenu?.classList.remove('active');
    if (tab === 'account' || tab === 'messaging') {
      subMenu?.classList.add('active');
    }
  }
}
