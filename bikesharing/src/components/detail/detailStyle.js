import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MAIN_COLOR = '#81ba53';
export default loginStyles = StyleSheet.create({
    content: {
        flex: 1,
    },
    header: {
        backgroundColor: MAIN_COLOR,
    },
    contentDetail: {
        flex: 1
    },
    contentLogo: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentDetailProfile: {
        flex: 4
    },
    contentCall: {
        flex: 0.8,
    },
    userName: {
        fontWeight: 'bold'
    },
    tabHeader: {
        backgroundColor: MAIN_COLOR
    },
    tabText: {
        color: 'white'
    },
    callButton: {
        backgroundColor: '#81ba53',
        justifyContent: 'center',
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        margin: 10
    },
    textCallButton:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }



})