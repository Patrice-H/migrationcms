import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-black-window',
  templateUrl: './black-window.component.html',
  styleUrls: ['./black-window.component.scss'],
})
export class BlackWindowComponent {
  @Input() activePage;
  @Output() cancel = new EventEmitter<boolean>();

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
    setTimeout(() => {
      button?.classList.add('hidden');
    }, 600);
    this.cancel.emit(true);
  }
  resetComponent(): void {
    const button = document.getElementById('close-btn');
    const window = document.getElementById('black-window');
    button?.classList.remove('activated');
    button?.classList.remove('hidden');
    window?.classList.remove('progressive-hidden');
  }
}
