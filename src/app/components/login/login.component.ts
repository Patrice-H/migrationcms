import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() activeLink!: string;
  @Output() closeApp = new EventEmitter<boolean>();
  @Output() nextStep = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private formElement: FormService,
    private router: Router
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
    this.userRemembered
      ? checkbox?.classList.add('approved')
      : checkbox?.classList.remove('approved');
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
    if (this.formElement.emptyField(this.password)) {
      this.errorMessage = this.formElement.emptyFieldError;
      this.formElement.displayError('pass');
      errors = true;
    }
    this.userRemembered ? this.storage.setExpiryDate() : null;
    if (!errors) {
      this.sendForm();
    }
  }
  sendForm() {
    /* control backend  */
    /* pass unknown =>
    this.errorMessage = this.formElement.invalidPasswordError;
    this.formElement.displayError('pass')
    /* pass match => */
    this.storage.writeToken();
    this.redirection();
  }
  redirection() {
    this.nextStep.emit('account');
  }
}
