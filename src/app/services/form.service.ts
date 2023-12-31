import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  emptyFieldError: string = 'champ requis';
  invalidEmailError: string = 'e-mail invalide';
  invalidNameError: string = 'format invalide';
  invalidPasswordError: string = 'mot de passe invalide';
  noError: string = '';

  resetComponent(id: string): void {
    const input = document.getElementById(id);
    const errorMessage = document.getElementById(`error-${id}`);
    input?.classList.remove('error');
    errorMessage?.classList.add('hidden');
  }
  emptyField(entry: string): boolean {
    if (entry === '' || entry === undefined) {
      return true;
    }

    return false;
  }
  displayError(id: string): void {
    const input = document.getElementById(id);
    const errorMessage = document.getElementById(`error-${id}`);
    input?.classList.add('error');
    errorMessage?.classList.remove('hidden');
  }
  hideError(id: string): void {
    const input = document.getElementById(id);
    const errorMessage = document.getElementById(`error-${id}`);
  }
  emailInvalid(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regex) === null && email !== '') {
      return true;
    }

    return false;
  }
  nameInvalid(name: string): boolean {
    const regex =
      /^[a-zA-Z]+$|^[a-zA-Z]+-?[a-zA-Z]+$|^[a-zA-Z]+-[a-zA-Z]+-?[a-zA-Z]+$/;
    if (name !== undefined && name !== '' && name.match(regex) === null) {
      return true;
    }

    return false;
  }
}
