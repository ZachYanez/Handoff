import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  public isLoggedIn: boolean = false;
  public Auth: any = {
    id: '',
    status: this.isLoggedIn,
  };

  validateEmail(email: any) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log('Email validated:', email);
      return true;
    }
    console.log('Email Not Validated', email);
    return false;
  }

  async saveEmail(key: string, email: string) {
    AsyncStorage.setItem(key, email);
  }
  async savePassword(key: string, password: string) {
    AsyncStorage.setItem(key, password);
  }

  async setLoginStatus(status: boolean) {
    if ((status = true)) {
      AsyncStorage.setItem('loginStatus', 'true');
      this.isLoggedIn = status;
    } else if ((status = false)) {
      AsyncStorage.setItem('loginStatus', 'false');
      this.isLoggedIn = status;
    }
  }

  async userExists(email: string) {
    try {
      const savedUserEmail = await AsyncStorage.getItem('email');
      console.log('userExist:', savedUserEmail);
      if (savedUserEmail === email) {
        console.log('user exists', savedUserEmail);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('user exist error', e);
    }
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  logOut() {
    AsyncStorage.setItem('loginStatus', 'false');
    this.isLoggedIn = false;
  }

  deleteAll() {
    AsyncStorage.removeItem('password');
    AsyncStorage.removeItem('loginStatus');
    AsyncStorage.removeItem('email');
    console.log('Local User Data Deleted');
  }
}
