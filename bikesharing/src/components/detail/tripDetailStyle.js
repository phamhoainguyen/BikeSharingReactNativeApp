import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MAIN_COLOR = '#81ba53';
export default loginStyles = StyleSheet.create({
    content: {
        flex: 1
    },
    contentMap: {
        flex: 2.5
    },
    map: {
        width: DEVICE_WIDTH, height: 159
    },
    contentPoint: {
        flex: 1.5
    },
    contentTimeMoney: {
        flex: 1,
        flexDirection: 'row'
    },
    contentTime: {
        flex: 1,
        flexDirection: 'row'
    },
    contentMoney: {
        flex: 1
    },
    textMoney: {
        fontSize: 30
    }


})