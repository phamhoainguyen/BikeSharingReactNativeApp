import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MAIN_COLOR = '#8DDF83';
export default loginStyles = StyleSheet.create({
    content: {
        flex: 1
    },
    header:{
        backgroundColor: MAIN_COLOR
    },
    postButton:{
        backgroundColor: MAIN_COLOR,
        marginTop: 20

    },
    input:{
        backgroundColor:'white' ,
        opacity: 0.8
    },

    textButton:{
        color: 'white'
    },
    picker :{
        width:DEVICE_WIDTH - 20,
      

    },
    map:{
        width: DEVICE_WIDTH ,
        height:DEVICE_HEIGHT - 120
    },
    contentInput:{
        marginLeft:30,
        marginRight:30,
        marginTop:20
    },
    contentTime:{
        backgroundColor:'white' ,
        opacity: 0.8,
        flexDirection:'row'
    },
    background:{
        flex:1
      },







})