import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';

import { Main, Welcome } from './src/containers';

class App extends Component {
  state = {
    isStarted: false,
  };

  startWorkout = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;
    return (
      <Provider store={store}>
        {isStarted ? <Main /> : <Welcome startWorkout={this.startWorkout} />}
      </Provider>
    );
  }
}
// http://ios7colors.zenimot.com/
export default App;
