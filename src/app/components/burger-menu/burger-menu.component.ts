import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit {
  buttonLabel!: string;
  @Output() burgerLink = new EventEmitter<string>();

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.buttonLabel = this.storage.isConnected() ? 'Déconnexion' : 'Connexion';
  }

  navigate(event: MouseEvent, target: string) {
    event.preventDefault();
    this.burgerLink.emit(target);
  }
  logInOut(event: MouseEvent) {
    event.preventDefault();
    if (this.buttonLabel === 'Connexion') {
      this.storage.writeToken();
      this.buttonLabel = 'Déconnexion';
    } else {
      this.storage.disconnect();
      this.buttonLabel = 'Connexion';
    }

    this.burgerLink.emit('account');
  }
}
