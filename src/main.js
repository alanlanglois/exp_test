import Exponent from 'exponent';
import React from 'react';
import { AppRegistry, Platform, StatusBar, StyleSheet, View, } from 'react-native';
import { NavigationProvider, StackNavigation, } from '@exponent/ex-navigation';
/*
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
*/

import Router from './navigation/Router';
import MyScene from './scenes/LobyScreen';

/*import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return create( reducer, initialState, enhancer );
}*/

//const store = configureStore({})

class App extends React.Component {
  render() {

    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('LobyScreen')} />
      </NavigationProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
