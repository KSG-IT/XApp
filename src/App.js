import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';

import { createRootNavigator } from "./routes";

class App extends Component {
  constructor(props) {
    console.log("APP");
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  render() {
    const Routes = createRootNavigator();

    return (
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
    );
  }
}

export default App;
