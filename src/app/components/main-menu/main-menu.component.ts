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
    const domTab = document.getElementById(this.activeTab);
    domTab?.classList.add('active');
    this.resetMenu();
  }

  updateActiveTab(submenu: boolean, tab: string = '#') {
    tab === '#' ? null : (this.activeTab = tab);
    submenu ? this.openCloseMenu() : null;
    this.updateDOM();
  }

  updateDOM() {
    const mainMenu = Array.from(document.getElementsByTagName('a'));
    mainMenu.forEach((tab) => tab.classList.remove('active'));
    const domTab = document.getElementById(this.activeTab);
    console.log(domTab);
    domTab?.classList.add('active');
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
