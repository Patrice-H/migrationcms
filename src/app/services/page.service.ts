import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private storage: StorageService) {}

  initPage(): void {
    this.storage.getLocalStorage() === null
      ? this.storage.createLocalStorage()
      : this.storage.updateLastConnexion();
  }
}
