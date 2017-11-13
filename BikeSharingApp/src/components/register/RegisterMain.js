import React, { Component } from 'react';
import {
    StyleSheet,
    

} from 'react-native';

import RegisterForm from './RegisterForm.js';
import RegisterBackground from './RegisterBackground.js';
import RegisterButton from './RegisterButton.js';
import RegisterLogo1 from './RegisterLogo.js';
export default class RegisterMain extends Component {
    render() {
        return (
            <RegisterBackground > 
                <RegisterLogo1 />
                <RegisterForm />
                <RegisterButton
                    buttonName='Tiep tuc'
                />            
            </RegisterBackground >
        );
    }
}

