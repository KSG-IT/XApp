import { NavigationActions } from 'react-navigation';

export const goToSettings = (loggedIn) => (dispatch) => {
  if (loggedIn) {
    dispatch(NavigationActions.navigate({routeName: "Settings"}));
  } else {
    dispatch(NavigationActions.navigate({
      routeName: "Login",
      params: {
        destination: "Settings"
      },
    }));
  }
};

export const goToTransactions = (loggedIn) => (dispatch) => {
  if (loggedIn) {
    dispatch(NavigationActions.navigate({routeName: "Transactions"}));
  } else {
    dispatch(NavigationActions.navigate({
      routeName: "Login",
      params: {
        destination: "Transactions"
      },
    }));
  }
};

export const goToLogin = () => (dispatch) => {
  dispatch(NavigationActions.navigate({routeName: "Login"}));
};

export const goToHome = () => (dispatch) => {
  dispatch(NavigationActions.navigate({routeName: "Home"}));
};
