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
    background:{
        flex:1
      },
    header:{
        backgroundColor: MAIN_COLOR,
    },
    titleStyle: {
        
    },
    coverImage: {
        flex: 0.6,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    profileImage: {
        margin: 5,
        width: 70,
        height: 70,
        borderRadius: 120 / 2,
    },
    nameUser: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    vehicle: {
        fontSize: 13,
    },
    tabContent: {
        flex: 0.2,
        backgroundColor: 'gray'
    },

    mapContent: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContent:{
        flex: 0.75,
    },
    startItemStyle: {
        flex: 1,
    },
    endItemStyle: {
        flex: 1,
    },
    timeItemStyle: {
        flex: 1,
    },
    distance: {
        flex: 1,
    },
    detailInfo: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'yellow',
    },
    
    buttonCall: {
        flex: 0.2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: MAIN_COLOR,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    }

})