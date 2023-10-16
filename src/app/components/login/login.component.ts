import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormService } from 'src/app/services/form.service';
import { LoginControllerService } from 'src/app/services/login-controller.service';

/**
 * @class
 * @description Login graphic interface
 */
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
    private formElement: FormService,
    private controller: LoginControllerService
  ) {}

  /**
   * @function
   * @description Emit an event - Close window
   */
  cancel(op: boolean): void {
    this.isHidden = op;
    this.closeApp.emit(true);
  }

  /**
   * @function
   * @description Reset component and error message
   * @param {String} id Component id
   */
  reset(id: string): void {
    this.formElement.resetComponent(id);
    this.errorMessage = this.formElement.noError;
  }

  /**
   * @function
   * @description Set user email value
   * @param {String} value Email value
   */
  modify(value: string) {
    this.password = value;
  }

  /**
   * @function
   * @description Set the checkbox state
   */
  remember() {
    const checkbox = document.getElementById('remembered');
    checkbox?.classList.remove('error');
    this.userRemembered = !this.userRemembered;
    this.userRemembered
      ? checkbox?.classList.add('approved')
      : checkbox?.classList.remove('approved');
  }

  /**
   * @function
   * @description Frontend log in form control
   * @param {MouseEvent} event - Trig on click
   */
  controlForm(event: MouseEvent) {
    let errors = false;
    event.preventDefault();
    // Empty user password control
    if (this.formElement.emptyField(this.password)) {
      this.errorMessage = this.formElement.emptyFieldError;
      this.formElement.displayError('pass');
      errors = true;
    }

    this.userRemembered ? this.storage.setExpiryDate() : null;
    errors
      ? null
      : this.controller.controlPassword(this.nextStep, this.errorMessage);
    this.formElement.displayError('pass');
  }
}
