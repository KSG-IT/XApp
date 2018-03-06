import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import RootNavigator from './routes/Navigator';
import reducers from './reducers';
import { reactNavigationReduxMiddleware } from './utils/redux';

const middlewares = [
  thunk,
  reactNavigationReduxMiddleware
];
const reducer = combineReducers({
  ...reducers,
  form: formReducer,
});

if (process.env.NODE_ENV === "development") {
  const {logger} = require("redux-logger");

  middlewares.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigator/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
