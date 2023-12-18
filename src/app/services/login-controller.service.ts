import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MenuService } from 'src/app/services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class LoginControllerService {
  constructor(private storage: StorageService, private menu: MenuService) {}

  controlEmail(event: EventEmitter<string>, email: string): void {
    if (email === 'a@aa.aaa') {
      this.storage.setUserName('a a');
      event.emit('logIn');
    } else {
      event.emit('signUp');
    }
    this.storage.setEmail(email);
    //if (this.storage.isConnected()) {
    /* control backend  */
    /* email unknown =>
      this.nextStep.emit('signup');
      /* email match => 
      event.emit('connect');
    } else {
      event.emit('logIn');
    }*/
  }

  controlPassword(
    event: EventEmitter<string>,
    password: string,
    errorMessage: string
  ): void {
    if (password === 'aaaa') {
      this.storage.writeToken();
      event.emit('connect');
    }
    /** control backend **/
    /* => pass unknown 
      errorMessage = this.formElement.invalidPasswordError;
      this.formElement.displayError('pass')
      /* =>  pass match 
    this.storage.writeToken();
    this.menu.navigate(event, 'account');*/
  }
}
