import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomePage from './HomePage';
import ElementPage from './ElementPage';
import FooterNav from './FooterNav';

const App = StackNavigator({
  Home: { screen: HomePage },
  Element: { screen: ElementPage },
  Footer: { screen: FooterNav }
})

export default App;
