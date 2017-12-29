import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
/*
const MARGIN = 40;

export default registerStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgb(250, 200, 0)',
    },
    headerAndLogoContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    logoImage: {
        width: 200,
        height: 150,
    },
    headerText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },

    formContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    inputWrapper: {
        // flex: 1,
        // marginTop: 0,
        marginBottom: 15,
    },
    inputText: {
        width: DEVICE_WIDTH - 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        paddingLeft: 45,
        borderRadius: 20,
        marginHorizontal: 20,
        color: 'black',
        zIndex: 98,
    },
    textInputInlineImage: {
        position: 'absolute',//relative
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },

    buttonContainer: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});
*/
export default registerStyles = StyleSheet.create({
    header:{
        backgroundColor:'transparent'
      },
    content:{
      flex:1
    },
    background:{
        flex:1
      },
    registerContent:{
        marginLeft: 30,
        marginRight: 30,
        marginTop:80,
       
    },
    text:{
        color:'rgba(255, 255, 255, 1)'
    },
});