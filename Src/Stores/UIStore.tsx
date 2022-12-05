import {Appearance} from 'react-native';
import Theme from '../Config/Theme';
import {makeAutoObservable} from 'mobx';

export class UIStore {
  constructor() {
    makeAutoObservable(this);
  }

  public theme: any = {};

  getTheme() {
    const userTheme = Appearance.getColorScheme();

    if (userTheme === 'dark') {
      this.theme = Theme.Dark;
    } else {
      this.theme = Theme.Light;
    }

    return this.theme;
  }
}
