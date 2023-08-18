import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  isOpened!: boolean;
  chevronState!: string;
  @Input() activeTab = '';

  constructor(private router: Router) {}

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
    this.resetMenu();
    this.updateSubMenu();
  }

  updateActiveTab(submenu: boolean, tab: string = '#') {
    tab === '#' ? null : (this.activeTab = tab);
    submenu ? this.openCloseMenu() : null;
    this.updateDOM();
  }

  updateDOM() {
    const mainMenu = Array.from(document.getElementsByTagName('a'));
    mainMenu.forEach((tab) => tab.classList.remove('active'));
    this.updateSubMenu();
    const activeTab = document.getElementById(this.activeTab);
    activeTab?.classList.add('active');
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
}
