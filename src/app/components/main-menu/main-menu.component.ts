import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

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

  constructor(private router: Router, private storage: StorageService) {}

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
    this.resetMenu();
    this.updateSubMenu();
  }

  navigate(event: MouseEvent, target: string) {
    event.preventDefault();
    this.mainLink.emit(target);
  }

  updateSubMenu() {
    const subMenu = document.getElementById('user-logo');
    subMenu?.classList.remove('active');
    if (this.activeTab === 'account' || this.activeTab === 'messaging') {
      subMenu?.classList.add('active');
    }
  }

  openCloseMenu(): void {
    this.isOpened = !this.isOpened;
    this.chevronState = this.isOpened ? 'up' : 'down';
    this.resetMenu();
  }

  resetMenu(): void {
    const chevron = document.getElementById('chevron');
    chevron?.setAttribute('class', '');
    chevron?.classList.add(this.chevronState);
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
    this.mainLink.emit('account');
  }
}
