import { Component, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isHidden: boolean = false;
  errorMessage: string = '';
  userRemembered: boolean = false;
  password: string = '';
  @Output() closeApp = new EventEmitter<boolean>();
  @Output() nextStep = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private formElement: FormService
  ) {}

  cancel(op: boolean): void {
    this.isHidden = op;
    this.closeApp.emit(true);
  }
  reset(): void {
    this.formElement.resetComponent('pass');
    this.errorMessage = '';
  }
  modify(value: string) {
    this.password = value;
  }
  remember() {
    const checkbox = document.getElementById('remembered');
    checkbox?.classList.remove('error');
    this.userRemembered = !this.userRemembered;
    if (this.userRemembered) {
      checkbox?.classList.add('approved');
      this.storage.setExpiryDate();
    } else {
      checkbox?.classList.remove('approved');
    }
  }
  dataEntry(): boolean {
    if (this.password === '') {
      return false;
    }

    return true;
  }
  controlForm(event: MouseEvent) {
    let errors = false;
    event.preventDefault();
    const input = document.getElementById('pass');
    const message = document.getElementById('error-message');

    if (!this.dataEntry()) {
      input?.classList.add('error');
      this.errorMessage = 'Votre Mot de passe est requis';
      message?.classList.remove('hidden');
      errors = true;
    }
    if (!errors) {
      this.nextStep.emit('signUp');
    }
  }
}
