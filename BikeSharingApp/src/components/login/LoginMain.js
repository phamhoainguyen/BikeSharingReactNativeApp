import React, { Component } from 'react';
import {
    StyleSheet,

} from 'react-native';

import RegisterBackground from '../register/RegisterBackground.js';
import LoginLogo from './LoginLogo.js';
import LoginForm from './LoginForm.js';
import LoginButton from './LoginButton.js';
export default class LoginMain extends Component {
    render() {
        return (
            <RegisterBackground>
                <LoginLogo />
                <LoginForm/>
                <LoginButton buttonName={'DANG NHAP'}/>
            </RegisterBackground >
        );
    }
}




