import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  @Output() burgerLink = new EventEmitter<string>();

  navigate(event: MouseEvent, target: string) {
    if (
      target === 'services' ||
      target === 'account' ||
      target === 'messaging' ||
      target === 'forum'
    ) {
      event.preventDefault();
      this.burgerLink.emit(target);
    }
  }
}
