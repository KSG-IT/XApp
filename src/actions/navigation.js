// @flow

import { NavigationActions } from 'react-navigation';

export const goToSettings = () => (dispatch: Function) => {
  dispatch(NavigationActions.navigate({ routeName: "Settings" }));
};

export const goToTransactions = (loggedIn: boolean) => (dispatch: Function) => {
  if (loggedIn) {
    dispatch(NavigationActions.navigate({ routeName: "Transactions" }));
  } else {
    dispatch(NavigationActions.navigate({
      routeName: "Login",
      params: {
        destination: "Transactions"
      },
    }));
  }
};

export const goToChooseActiveArticles = () => (dispatch: Function) => {
  dispatch(NavigationActions.navigate({ routeName: "ChooseActiveArticles" }));
};

export const goToLogin = () => (dispatch: Function) => {
  dispatch(NavigationActions.navigate({ routeName: "Login" }));
};

export const goToHome = () => (dispatch: Function) => {
  dispatch(NavigationActions.navigate({ routeName: "Home" }));
};

export const goBack = () => (dispatch: Function) => {
  dispatch(NavigationActions.back({}));
};

export const openDrawer = () => (dispatch: Function) => {
  dispatch(NavigationActions.navigate({ routeName: "DrawerOpen" }));
};
