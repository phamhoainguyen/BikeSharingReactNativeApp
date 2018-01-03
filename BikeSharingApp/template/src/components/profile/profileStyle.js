import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default registerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#81ba53'
    },
    content:{
        flex:1,
        marginLeft: 30,
        marginRight: 30,
        alignItems :'center',
    },
    profileContent:{
        flex: 1,
        alignItems :'center',
    },
    editText:{
        alignItems: 'center',
        marginRight: 10,
         color:'white'
    },
    profileImage:{
        margin: 20,
        marginBottom: 10,
        width: 80,
        height: 80,
        borderRadius: 120 / 2,
    },

    formProfile: {
        flex: 2,
        backgroundColor: 'white',
    },
    nameUser:{
        color:'black'
    },
    editPhotoText:{
        color: 'blue',
        fontSize: 12,
        marginTop: 5,
        marginBottom:20
    },
    picker:{
        width:DEVICE_WIDTH - 100,
      
    },
    signOut:{
        paddingLeft: 30, 
        paddingRight: 30,
        color: 'white',
    },
    thoatButton: {
        backgroundColor: '#81ba53',
        paddingLeft: 30,
        paddingTop: 7,
        paddingRight: 30,
        paddingBottom: 7,
        marginTop: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    }
});