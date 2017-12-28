import React from 'react'
import {StackNavigator} from  'react-navigation';

import DefaultScreen from './src/components/default/default'
import LoginScreen from './src/components/login/login'
import RegisterScrenn from './src/components/register/register'
import PostScreen from './src/components/post/post'
import MapScreen from './src/components/post/map'
import SearchScreen from './src/components/search/search'
import ResultScreen from './src/components/result/result'


export  const Route = StackNavigator ({
    Login:
    {
        screen: LoginScreen
    
    },
    Defaul:
    {
        screen: DefaultScreen
    },
  
    Register:
    {
        screen: RegisterScrenn
    },
    Post:
    {
        screen: PostScreen
    },
    Map:
    {
        screen:MapScreen
    },
    Search:
    {
        screen:SearchScreen
    },
    Result:
    {
        screen:ResultScreen
    }

},{
    navigationOptions:{
        header:null
    }
});