import { Component } from '@angular/core';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent {
  setCmsSource(): string {
    return 'prestashop';
  }
  setCmsTarget(): string {
    return 'drupal';
  }
}
