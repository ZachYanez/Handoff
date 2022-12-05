import {AuthStore} from './AuthStore';
import React from 'react';
import {UIStore} from './UIStore';
import {UserStore} from './UserStore';

interface IStoreContext {
  uiStore: UIStore;
  userStore: UserStore;
  authStore: AuthStore;
}

const uiStore = new UIStore();
const userStore = new UserStore();
const authStore = new AuthStore();

export const StoreContext = React.createContext<IStoreContext>({
  uiStore,
  userStore,
  authStore,
});
