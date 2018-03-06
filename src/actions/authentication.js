import {
  LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS,
  LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS,
} from './constants';
import auth from '../utils/auth';
import { NavigationActions } from 'react-navigation';

export const logIn = (username, password, destination = "Home") => (dispatch) => {
  dispatch({
    type: LOG_IN_REQUEST,
  });

  auth.login({
    username,
    password,
  }).then(({data: loginInfo}) => {
    dispatch({
      type: LOG_IN_SUCCESS,
      payload: loginInfo,
      destination,
    });

    dispatch(NavigationActions.navigate({routeName: destination}));
  }).catch(error => {
    dispatch({
      type: LOG_IN_FAILURE,
      error,
    });
  });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOG_OUT_REQUEST,
  });

  auth.logout()
    .then(({data: logoutInfo}) => {
      dispatch({
        type: LOG_OUT_SUCCESS,
        payload: logoutInfo,
      });

      dispatch(NavigationActions.navigate({routeName: "Home"}));
    }).catch(error => {
    dispatch({
      type: LOG_OUT_FAILURE,
      error,
    });
  });
};
