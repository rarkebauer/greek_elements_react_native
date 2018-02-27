import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomePage from './HomePage';
import ElementPage from './ElementPage';

const App = StackNavigator({
  Home: { screen: HomePage },
  Element: { screen: ElementPage }
})

export default App;
