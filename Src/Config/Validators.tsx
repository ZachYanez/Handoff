/* eslint-disable no-alert */
import {observable} from 'mobx';

export function ValidateEmail(mail: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert('You have entered an invalid email address!');
  return false;
}

observable(ValidateEmail);
