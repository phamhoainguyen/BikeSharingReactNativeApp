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
    profileContent:{
        alignItems :'center',
        flex:1
    },
    editText:{
         color:'white'
    },
    profileImage:{
        marginTop: 5,
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
       
        
    },
    nameUser:{
        color:'black'
    },
    editPhotoText:{
        color: 'blue',
        marginTop: 10,
        marginBottom:20
    },
    picker:{
        width:DEVICE_WIDTH -40,
      
    },
    signOut:{
        marginTop:20
    }






});