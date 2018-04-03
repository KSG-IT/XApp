import { LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "./constants";
import loadUsersUtils from '../utils/loadUsers';

export const loadUser = (id: number) => (dispatch: Function) => {
  dispatch({
    type: LOAD_USER_REQUEST,
  });

  loadUsersUtils.loadUser(id)
    .then(({ data: user }) => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: user,
      });
    }).catch((error) => {
      dispatch({
        type: LOAD_USER_FAILURE,
        error,
      });
  });
};