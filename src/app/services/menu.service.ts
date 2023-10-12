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
}
