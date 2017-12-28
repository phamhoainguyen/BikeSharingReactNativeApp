import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default loginStyles = StyleSheet.create({
    content: {
        flex: 1
    },
    header:{
        backgroundColor: 'red'
    },
    postButton:{
        backgroundColor: 'red'

    },
    textButton:{
        color: 'white'
    },
    picker :{
        width:DEVICE_WIDTH - 20

    }







})