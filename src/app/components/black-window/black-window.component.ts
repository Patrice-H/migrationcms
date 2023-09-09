import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-black-window',
  templateUrl: './black-window.component.html',
  styleUrls: ['./black-window.component.scss'],
})
export class BlackWindowComponent {
  @Input() activePage;

  constructor(private router: Router) {
    const path =
      this.router.url.split('/')[1] === ''
        ? 'home'
        : this.router.url.split('/')[1];
    this.activePage = path;
  }

  closeWindow(): void {
    const button = document.getElementById('close-btn');
    const window = document.getElementById('black-window');
    button?.classList.add('activated');
    window?.classList.add('progressive-hidden');
    console.log(this.activePage);
    setTimeout(() => {
      button?.classList.add('hidden');
    }, 600);
  }
}
