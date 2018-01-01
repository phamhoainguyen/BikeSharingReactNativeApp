import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
/*
const MARGIN = 40;

export default loginStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgb(250, 200, 0)',
    },
    headerAndLogoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    logoImage: {
        width: 250,
        height: 200,
    },
    headerText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
    formContainer: {
        flex: 2,
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

    viewEmpty: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'flex-start',

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
        marginTop: 30,

    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});

*/
export default loginStyles = StyleSheet.create({
    content: {
        flex: 1
    },
    logoContent: {
        flex: 1
    },
    background: {
        flex: 1
    },
    loginContent: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    registerContent: {
        flexDirection: 'row',
        marginTop: 50
    },
    button: {
        backgroundColor: 'transparent',
        paddingLeft: 30,
        paddingTop: 7,
        paddingRight: 30,
        paddingBottom: 7,
        marginTop: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: 'white',
    },
    commonText: {
        color: 'white',
        fontSize: 12
    }, 
    registerText: {
        color: 'white',
        fontSize: 12,
        textDecorationLine: 'underline',
    }




})