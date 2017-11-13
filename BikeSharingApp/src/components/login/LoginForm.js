import React, { Component } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,

} from 'react-native';

import RegisterButton from './LoginButton.js';
import RegisterTextInput from '../register/RegisterTextInput.js';

export default class RegisterForm extends Component {
    render() {
        return (
            // <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>

                {/* TextInput So dien thoai */}
                <RegisterTextInput
                    source={require('../../images/icons/phone.png')}
                    placeholder='So dien thoai'
                    autoCapitalize={'words'} //sentences, words, characters
                    returnKeyType={'go'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                />

                {/* TextInput Mat khau */}
                <RegisterTextInput
                    source={require('../../images/icons/password.png')}
                    secureTextEntry={true}
                    placeholder='Mat khau'
                    autoCapitalize={'none'} //sentences, words, characters
                    returnKeyType={'next'}
                    autoCorrect={false}
                />
                {/* <View style={styles.viewEmpty}/> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewEmpty: {
        flex: 1,
    }
});
