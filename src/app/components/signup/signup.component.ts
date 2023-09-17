import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isHidden: boolean = false;
  eMail!: string;
  errorEmail: string = '';
  lastName!: string;
  errorLastName: string = '';
  firstName!: string;
  errorFirstName: string = '';
  userName!: string;
  endForm: boolean = false;
  @Output() closeApp = new EventEmitter<boolean>();

  constructor(
    private storage: StorageService,
    private formElement: FormService
  ) {}

  ngOnInit(): void {
    let rawData = this.storage.getLocalStorage();
    let data = rawData === null ? null : JSON.parse(rawData);
    this.eMail = data.eMail;
  }

  cancel(op: boolean): void {
    this.isHidden = op;
    this.closeApp.emit(true);
  }
  reset(id: string) {
    this.formElement.resetComponent(id);
    switch (id) {
      case 'email':
        this.errorEmail = '';
        break;
      case 'last-name':
        this.errorLastName = '';
        break;
      case 'first-name':
        this.errorFirstName = '';
        break;
      case 'user-name':
        break;
      default:
        break;
    }
  }
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
  controlForm(event: MouseEvent) {
    let errors = false;
    event.preventDefault();
    if (this.formElement.emptyField(this.eMail)) {
      this.errorEmail = this.formElement.emptyFieldError;
      this.formElement.displayError('email');
      errors = true;
    }
    if (this.formElement.emailInvalid(this.eMail)) {
      this.errorEmail = this.formElement.invalidEmailError;
      this.formElement.displayError('email');
      errors = true;
    }
    if (this.formElement.emptyField(this.lastName)) {
      this.errorLastName = this.formElement.emptyFieldError;
      this.formElement.displayError('last-name');
      errors = true;
    }
    if (this.formElement.nameInvalid(this.lastName)) {
      this.errorLastName = this.formElement.invalidNameError;
      this.formElement.displayError('last-name');
      errors = true;
    }
    if (this.formElement.emptyField(this.firstName)) {
      this.errorFirstName = this.formElement.emptyFieldError;
      this.formElement.displayError('first-name');
      errors = true;
    }
    if (this.formElement.nameInvalid(this.firstName)) {
      this.errorFirstName = this.formElement.invalidNameError;
      this.formElement.displayError('first-name');
      errors = true;
    }
    errors ? null : this.sendForm();
  }

  sendForm() {
    this.endForm = true;
  }
}
