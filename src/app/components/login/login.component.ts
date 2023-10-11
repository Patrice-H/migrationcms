import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isHidden: boolean = false;
  userRemembered: boolean = false;
  password: string = '';
  errorMessage: string = this.formElement.noError;

  @Input() activeLink!: string;
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

  reset(id: string): void {
    this.formElement.resetComponent(id);
    this.errorMessage = this.formElement.noError;
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
      /** control backend **/
      /* => pass unknown 
      this.errorMessage = this.formElement.invalidPasswordError;
      this.formElement.displayError('pass')
      /* =>  pass match */
      this.storage.writeToken();
      this.nextStep.emit('account');
    }
  }
}
