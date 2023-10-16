import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MenuService } from 'src/app/services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class LoginControllerService {
  constructor(private storage: StorageService, private menu: MenuService) {}

  controlEmail(event: EventEmitter<string>) {
    if (this.storage.isConnected()) {
      /* control backend  */
      /* email unknown =>
      this.nextStep.emit('signup');
      /* email match => */
      event.emit('account');
    } else {
      event.emit('logIn');
    }
  }

  controlPassword(event: EventEmitter<string>, errorMessage: string) {
    /** control backend **/
    /* => pass unknown 
      errorMessage = this.formElement.invalidPasswordError;
      this.formElement.displayError('pass')
      /* =>  pass match */
    this.storage.writeToken();
    this.menu.navigate(event, 'account');
  }
}
