import { NavigationActions } from 'react-navigation';

import { Navigator } from '../routes/Navigator';

const initialAction = {type: NavigationActions.Init};
const initialState = Navigator.router.getStateForAction(initialAction);

function navigation(state = initialState, action) {
  let newState = Navigator.router.getStateForAction(action, state);

  if (action.params && action.params.replace) {
    newState.routes.splice(newState.index - 1, 1);
    newState.index--;
  }

  newState.routes.forEach((route, i) => {
    if (!route.params) route.params = {};

    route.params.active = i === newState.index;
  });

  return newState
}

export default navigation;
