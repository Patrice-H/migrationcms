import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormService } from 'src/app/services/form.service';
import { LoginControllerService } from 'src/app/services/login-controller.service';

/**
 * @class
 * @description Log / Sign in graphic interface
 * @extends OnInit
 */
@Component({
  selector: 'app-log-sign',
  templateUrl: './log-sign.component.html',
  styleUrls: ['./log-sign.component.scss'],
})
export class LogSignComponent implements OnInit {
  isHidden: boolean = false;
  endForm: boolean = false;
  termOfUseApproved: boolean = false;
  userEmail: string = '';
  errorMessage: string = this.formElement.noError;

  @Output() closeApp = new EventEmitter<boolean>();
  @Output() nextStep = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private formElement: FormService,
    private controller: LoginControllerService
  ) {}

  /**
   * @function
   * @description Init component
   */
  ngOnInit(): void {
    this.isHidden = this.storage.isConnected() ? true : false;
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
   * @description Set checkbox state
   */
  approve(): void {
    const checkbox = document.getElementById('term-of-use');
    checkbox?.classList.remove('error');
    this.termOfUseApproved = !this.termOfUseApproved;
    this.termOfUseApproved
      ? checkbox?.classList.add('approved')
      : checkbox?.classList.remove('approved');
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
  modify(value: string): void {
    this.userEmail = value;
  }

  /**
   * @function
   * @description Frontend log/sign in form control
   * @param {MouseEvent} event - Trig on click
   */
  controlForm(event: MouseEvent) {
    const checkbox = document.getElementById('term-of-use');
    let errors = false;
    event.preventDefault();
    // Empty user email control
    if (this.formElement.emptyField(this.userEmail)) {
      this.errorMessage = this.formElement.emptyFieldError;
      this.formElement.displayError('email');
      errors = true;
    }
    // Invalid user email control
    if (this.formElement.emailInvalid(this.userEmail)) {
      this.errorMessage = this.formElement.invalidEmailError;
      this.formElement.displayError('email');
      errors = true;
    }
    // Term of use approved control
    if (!this.termOfUseApproved) {
      checkbox?.classList.add('error');
      errors = true;
    }

    errors ? null : this.controller.controlEmail(this.nextStep);
  }
}
