import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Alert,
} from 'react-native';

import loginStyles from './loginStyles';
import signIn from '../../api/signIn';
import saveToken from '../../api/saveToken'



export default class LoginMain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phoneNumber: '',
            password: '',
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Dang nhap thanh cong!',
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }


    onFail(warnning) {
        Alert.alert(
            'Notice',
            warnning,
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }

    validate = () => {
        if (this.state.password.length <= 0) {
            this.onFail("Vui long nhap mat khau co it nhat 6 ky tu!");
            return false;
        }
        if (this.state.phoneNumber.length <= 9 || this.state.phoneNumber.length >= 14) {
            this.onFail("Vui long nhap dung so dien thoai");
            return false;
        }
        return true;
    }

    onSignIn() {
        if(this.validate() == true){
            const { phoneNumber, password } = this.state;
        signIn(phoneNumber, password)
            .then(res => {
                if (res) {
                    saveToken(res.user.token)
                    this.onSuccess();
                    ////////////////////chuyen page/////////////////
                    // lay token
                    // AsyncStorage.getItem('@token')
                    //     .then(token => {
                    //         console.log(token)
                    //     })
                }
            })
            .catch(err => this.onFail("Loi dang nhap"));
        }
    }

    render() {
        const { phoneNumber, password } = this.state;
        return (
            <View style={loginStyles.background}>

                <View style={loginStyles.headerAndLogoContainer}>
                    <Text style={loginStyles.headerText}> ĐĂNG NHAP </Text>
                    {/* <Image style={loginStyles.image} source={require('../../images/icons/vespa.png')}>
                    </Image> */}
                </View>

                <View style={loginStyles.formContainer}>


                    <View style={loginStyles.inputWrapper}>
                        <Image source={require('../../images/icons/phone.png')}
                            style={loginStyles.textInputInlineImage}
                        />
                        <TextInput style={loginStyles.inputText}
                            placeholder='So dien thoai'
                            autoCapitalize={'words'} //sentences, words, characters
                            returnKeyType={'go'}
                            keyboardType={'numeric'}
                            autoCorrect={false}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={phoneNumber}
                            onChangeText={text => this.setState({ phoneNumber: text })}
                        />
                    </View>

                    <View style={loginStyles.inputWrapper}>
                        <Image source={require('../../images/icons/password.png')}
                            style={loginStyles.textInputInlineImage}
                        />
                        <TextInput style={loginStyles.inputText}
                            secureTextEntry={true}
                            placeholder='Mat khau'
                            autoCapitalize={'none'} //sentences, words, characters
                            returnKeyType={'next'}
                            autoCorrect={false}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={password}
                            onChangeText={text => this.setState({ password: text })}

                        />
                    </View>

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity style={loginStyles.button}
                            onPress={this.onSignIn.bind(this)} >
                            <Text style={loginStyles.buttonText}> DANG NHAP </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}




