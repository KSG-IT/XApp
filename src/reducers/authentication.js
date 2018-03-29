// @flow

import {
  LOG_IN_SUCCESS, LOG_OUT_SUCCESS
} from '../actions/constants';

type Props = {
  state: {
    loggedIn: boolean,
    destination: string,
  },
  action: {
    type: string
  }
}

const initialState = {
  loggedIn: false,
  destination: "Home",
};

function authentication({state = initialState, action}: Props) {
  if (action.type === LOG_IN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
    }
  } else if (action.type === LOG_OUT_SUCCESS) {
    return {
      ...state,
      loggedIn: false,
    }
  }

  return state;
}

export default authentication;
