import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-sign',
  templateUrl: './log-sign.component.html',
  styleUrls: ['./log-sign.component.scss'],
})
export class LogSignComponent {
  isHidden: boolean = false;
  errorMessage: string = '';
  termOfUseApproved: boolean = false;
  userEmail: string = '';
  @Output() displayed = new EventEmitter<boolean>();

  cancel(op: boolean): void {
    this.isHidden = op;
    this.displayed.emit(true);
  }
  approve(): void {
    const checkbox = document.getElementById('term-of-use');
    checkbox?.classList.remove('error');
    this.termOfUseApproved = !this.termOfUseApproved;
    this.termOfUseApproved
      ? checkbox?.classList.add('approved')
      : checkbox?.classList.remove('approved');
  }
  edit(): void {
    const input = document.getElementById('email');
    const message = document.getElementById('error-message');
    input?.classList.remove('error');
    message?.classList.add('hidden');
    this.errorMessage = '';
  }
  modify(value: string): void {
    this.userEmail = value;
  }
  emailConform(): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.userEmail.match(regex) === null && this.userEmail !== '') {
      return false;
    }

    return true;
  }
  dataEntry(): boolean {
    if (this.userEmail === '') {
      return false;
    }

    return true;
  }
  controlForm(event: MouseEvent) {
    event.preventDefault();
    const input = document.getElementById('email');
    const checkbox = document.getElementById('term-of-use');
    const message = document.getElementById('error-message');
    let errors = false;
    if (!this.dataEntry()) {
      input?.classList.add('error');
      this.errorMessage = 'Merci de renseigner votre E-mail';
      message?.classList.remove('hidden');
      errors = true;
    }
    if (!this.emailConform()) {
      input?.classList.add('error');
      this.errorMessage = 'E-mail invalide';
      message?.classList.remove('hidden');
      errors = true;
    }
    if (!this.termOfUseApproved) {
      checkbox?.classList.add('error');
      errors = true;
    }
    //console.log(errors ? 'INVALID' : 'OK');
  }
}
