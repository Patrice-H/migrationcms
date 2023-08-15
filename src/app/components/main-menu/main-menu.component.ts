import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  isOpened!: boolean;
  chevronState!: string;

  ngOnInit(): void {
    this.isOpened = false;
    this.chevronState = 'down';
    this.resetMenu();
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
