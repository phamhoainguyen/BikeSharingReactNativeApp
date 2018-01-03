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
    header:{
        backgroundColor: '#81ba53'
    },
    button: {
        backgroundColor: MAIN_COLOR,
        paddingLeft: 30,
        paddingTop: 7,
        paddingRight: 30,
        paddingBottom: 7,
        marginTop: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    input:{
        backgroundColor:'white' ,
        opacity: 0.8,
        paddingLeft: 10,
        paddingRight: 10,
    },

    textButton:{
        color: 'white'
    },
    picker :{
        width:DEVICE_WIDTH ,
    },
    map:{
        width: DEVICE_WIDTH ,
        height:DEVICE_HEIGHT - 120
    },
    contentInput:{
        marginLeft:15,
        marginRight:15,
        marginTop:100,
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