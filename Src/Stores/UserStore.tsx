import User from '../../../Handoff/Types/UserType';
import {makeAutoObservable} from 'mobx';

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  public user: User = {
    name: '',
    email: '',
    id: '',
    handle: '',
  };

  getUser() {
    return this.user;
  }

  setUserName(name: any) {
    this.user.name = name;
  }

  setUserData(newData: {}) {
    this.user = {...this.user, ...newData};
  }
}
