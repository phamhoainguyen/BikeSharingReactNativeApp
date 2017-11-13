import React, { Component } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,

} from 'react-native';

import RegisterButton from './RegisterButton.js';
import RegisterTextInput from './RegisterTextInput.js';

export default class RegisterForm extends Component {
    render() {
        return (

            //behavior='padding'
            // <KeyboardAvoidingView behavior='padding' style={styles.container}>  
            <View style={styles.container}>
                {/* TextInput Ho va Ten */}
                <RegisterTextInput
                    source={require('../../images/icons/username.png')}
                    placeholder='Ho va Ten'
                    autoCapitalize={'none'} //sentences, words, characters
                    returnKeyType={'next'}
                    autoCorrect={false}
                />

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

                {/* TextInput Nhap lai mat khau */}
                <RegisterTextInput
                    source={require('../../images/icons/password.png')}
                    secureTextEntry={true}
                    placeholder='Nhap lai mat khau'
                    autoCapitalize={'none'} //sentences, words, characters
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
