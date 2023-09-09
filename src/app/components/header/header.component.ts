import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() activePage;
  isConnected!: boolean;

  constructor(private router: Router) {
    const path =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
    this.activePage = path;
  }

  ngOnInit(): void {
    if (
      this.activePage === 'home' ||
      this.activePage === 'docs' ||
      this.activePage === 'contact'
    ) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
    }
    // + Session storage logic
  }
}
