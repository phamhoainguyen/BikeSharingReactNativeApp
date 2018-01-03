import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default registerStyles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent'
    },
    content: {
        flex: 1
    },
    background: {
        flex: 1
    },
    guideContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    verifyNumberContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1

    },
    input: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
       

    },
    verifyContent: {
        flex: 1,
    },
    verifyButton: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 20,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        color: 'white'
    },



});