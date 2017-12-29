import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const MAIN_COLOR = '#81ba53';


export default registerStyles = StyleSheet.create({
    /*
    header: {
        backgroundColor: 'red'
    },
    content:{
        flex:1
    },
    rowContent:{
        flexDirection: 'row'
    },
    leftRowContent:{
        flex: 1, alignItems:'center'
    },
    rightRowContent:{
        flex: 3
    },
    sexText:{
        marginTop: 10, color:'black',fontWeight:'bold'
    },
    nameText:{
        color:'black', fontWeight:'bold',fontSize: 20
    },
    informationContent:{
        flexDirection: 'row'
    },
    */
    header: {
        backgroundColor: MAIN_COLOR
    },
    content:{
        flex:1
    },
    rowContent:{
        flexDirection: 'row'
    },
    pointContent:{
        flex: 3, 
        flexDirection: 'row' 
    },
    timeContent:{
        flex: 1, 
        flexDirection: 'row' ,
        alignItems: 'center'
    }





   





});