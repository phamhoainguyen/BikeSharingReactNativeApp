import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default registerStyles = StyleSheet.create({
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
    




   





});