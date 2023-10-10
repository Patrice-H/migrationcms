import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-log-sign',
  templateUrl: './log-sign.component.html',
  styleUrls: ['./log-sign.component.scss'],
})
export class LogSignComponent implements OnInit {
  isHidden: boolean = false;
  endForm: boolean = false;
  errorMessage: string = '';
  termOfUseApproved: boolean = false;
  userEmail: string = '';
  @Output() closeApp = new EventEmitter<boolean>();
  @Output() nextStep = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private formElement: FormService
  ) {}

  ngOnInit(): void {
    this.isHidden = this.storage.isConnected() ? true : false;
  }

  cancel(op: boolean): void {
    this.isHidden = op;
    this.closeApp.emit(true);
  }
  approve(): void {
    const checkbox = document.getElementById('term-of-use');
    checkbox?.classList.remove('error');
    this.termOfUseApproved = !this.termOfUseApproved;
    this.termOfUseApproved
      ? checkbox?.classList.add('approved')
      : checkbox?.classList.remove('approved');
  }
  reset(): void {
    this.formElement.resetComponent('email');
    this.errorMessage = '';
  }
  modify(value: string): void {
    this.userEmail = value;
  }
  controlForm(event: MouseEvent) {
    const checkbox = document.getElementById('term-of-use');
    let errors = false;
    event.preventDefault();
    if (this.formElement.emptyField(this.userEmail)) {
      this.errorMessage = this.formElement.emptyFieldError;
      this.formElement.displayError('email');
      errors = true;
    }
    if (this.formElement.emailInvalid(this.userEmail)) {
      this.errorMessage = this.formElement.invalidEmailError;
      this.formElement.displayError('email');
      errors = true;
    }
    if (!this.termOfUseApproved) {
      checkbox?.classList.add('error');
      errors = true;
    }
    errors ? null : this.controlEmail();
  }
  controlEmail() {
    if (this.storage.isConnected()) {
      /* control backend  */
      /* email unknown =>
      this.nextStep.emit('signup');
      /* email match => */
      this.nextStep.emit('account');
    } else {
      this.nextStep.emit('logIn');
    }
  }
}
