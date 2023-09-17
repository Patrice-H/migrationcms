import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  emptyStorage: boolean = this.getLocalStorage() === null ? true : false;

  createLocalStorage() {
    const connexionDate = new Date();
    const expiresMonth = connexionDate.getMonth() + 1;
    const expiresDate = new Date(
      connexionDate.getFullYear(),
      expiresMonth,
      connexionDate.getDate()
    );
    if (localStorage.getItem('user-preferences') === null) {
      const userPref = {
        token:
          '6hrFDATxrG9w14QY9wwnmVhLE0Wg6LIvwOwUaxz761m1JfRp4rs8Mzozk5xhSkw0_MQz6bpcJnrFUDwp5lPPFC157dHxbkKlDiQ9XY3ZIP8zAGCsS8ruN2uKjIaIargX',
        expires: expiresDate,
        userName: '',
        eMail: '',
        lastConnexion: connexionDate,
      };
      localStorage.setItem('user-preferences', JSON.stringify(userPref));
    }
  }
  getLocalStorage() {
    return localStorage.getItem('user-preferences');
  }
  updateLastConnexion(): void {
    const rawData = this.getLocalStorage();
    const now = new Date();
    let storage = rawData === null ? null : JSON.parse(rawData);
    storage.lastConnexion = now;
    localStorage.setItem('user-preferences', JSON.stringify(storage));
  }
  updateEmail(mail: string): boolean {
    this.emptyStorage ? this.createLocalStorage() : null;
    const rawData = this.getLocalStorage();
    let storage = rawData === null ? null : JSON.parse(rawData);
    if (storage.eMail === mail) {
      return false;
    }
    storage.eMail = mail;
    localStorage.setItem('user-preferences', JSON.stringify(storage));

    return true;
  }
  setExpiryDate(): void {
    const rawData = this.getLocalStorage();
    const now = new Date();
    const delay = now.getDate() + 1;
    const expireDate = now.setDate(delay);
    let storage = rawData === null ? null : JSON.parse(rawData);
    storage.expires = expireDate;
    localStorage.setItem('user-preferences', JSON.stringify(storage));
  }
}
