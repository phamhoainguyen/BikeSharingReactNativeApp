/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {Route} from './Route.js'
import DefaultScreen from './src/components/default/default'
import LoginScreen from './src/components/login/login'
import RegisterScrenn from './src/components/register/register'
import PostScreen from './src/components/post/post'
import MapScreen from './src/components/post/map'
import SearchScreen from './src/components/search/search'
import ResultScreen from './src/components/result/result'

export default class App extends Component {
  render() {
    return (
      <ResultScreen />
    );
  }
}
