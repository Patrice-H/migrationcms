import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';

/**
 * @class
 * @description Sign up graphic interface
 * @extends OnInit
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isHidden: boolean = false;
  endForm: boolean = false;
  eMail!: string;
  lastName!: string;
  firstName!: string;
  userName!: string;
  errorEmail: string = this.formElement.noError;
  errorLastName: string = this.formElement.noError;
  errorFirstName: string = this.formElement.noError;

  @Output() closeApp = new EventEmitter<boolean>();

  constructor(
    private storage: StorageService,
    private formElement: FormService
  ) {}

  /**
   * @function
   * @description Init component
   */
  ngOnInit(): void {
    let rawData = this.storage.getLocalStorage();
    let data = rawData === null ? null : JSON.parse(rawData);
    this.eMail = data.eMail;
  }

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
  reset(id: string) {
    this.formElement.resetComponent(id);
    switch (id) {
      case 'email':
        this.errorEmail = this.formElement.noError;
        break;
      case 'last-name':
        this.errorLastName = this.formElement.noError;
        break;
      case 'first-name':
        this.errorFirstName = this.formElement.noError;
        break;
      case 'user-name':
        break;
      default:
        break;
    }
  }

  /**
   * @function
   * @description Set input value
   * @param {String} value
   */
  modify(id: string, value: string) {
    switch (id) {
      case 'email':
        this.eMail = value;
        break;
      case 'last-name':
        this.lastName = value;
        break;
      case 'first-name':
        this.firstName = value;
        break;
      case 'user-name':
        this.userName = value;
        break;
      default:
        break;
    }
  }

  /**
   * @function
   * @description Frontend sign up form control
   * @param {MouseEvent} event - Trig on click
   */
  controlForm(event: MouseEvent) {
    let errors = false;
    event.preventDefault();
    //
    if (this.formElement.emptyField(this.eMail)) {
      this.errorEmail = this.formElement.emptyFieldError;
      this.formElement.displayError('email');
      errors = true;
    }
    //
    if (this.formElement.emailInvalid(this.eMail)) {
      this.errorEmail = this.formElement.invalidEmailError;
      this.formElement.displayError('email');
      errors = true;
    }
    //
    if (this.formElement.emptyField(this.lastName)) {
      this.errorLastName = this.formElement.emptyFieldError;
      this.formElement.displayError('last-name');
      errors = true;
    }
    //
    if (this.formElement.nameInvalid(this.lastName)) {
      this.errorLastName = this.formElement.invalidNameError;
      this.formElement.displayError('last-name');
      errors = true;
    }
    //
    if (this.formElement.emptyField(this.firstName)) {
      this.errorFirstName = this.formElement.emptyFieldError;
      this.formElement.displayError('first-name');
      errors = true;
    }
    //
    if (this.formElement.nameInvalid(this.firstName)) {
      this.errorFirstName = this.formElement.invalidNameError;
      this.formElement.displayError('first-name');
      errors = true;
    }

    errors ? null : (this.endForm = true);
  }
}
