import React, { Component } from 'react';
import Routes from './routes/Drawer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/Ind';
import ReduxThunk from 'redux-thunk';
import 'react-native-gesture-handler';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
export default App;


