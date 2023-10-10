import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activePage: string = 'home';

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.getLocalStorage() === null
      ? this.storage.createLocalStorage()
      : this.storage.updateLastConnexion();
  }
}
