import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Toast } from 'native-base'
import register from '../../api/register'
import saveToken from '../../api/saveToken'
import registerStyles from './registerStyle';


export default class RegisterMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: '',
            name: '',
            password: '',
            confirmPassword: '',
        };
    }


    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
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

    removePhoneNumber() {
        this.setState({ phoneNumber: '' });
    }



    validate = () => {
        if (this.state.name.length <= 0) {
            this.onFail("Vui long nhap ho va ten");
            return false;
        }
        if (this.state.password.length <= 0) {
            this.onFail("Vui long nhap mat khau co it nhat 6 ky tu!");
            return false;
        }
        if (this.state.phoneNumber.length <= 9 || this.state.phoneNumber.length >= 14) {
            this.onFail("Vui long nhap dung so dien thoai");
            return false;
        }
        if (this.state.password != this.state.confirmPassword) {
            this.onFail("Mat khau khong trung khop!");
            return false;
        }
        return true;
    }

    registerUser() {
        if (this.validate() == true) {
            const { phoneNumber, name, password } = this.state;
            register(phoneNumber, name, password)
                .then(res => {
                    if (res.status >= 400) return this.onFail("So dien thoai da duoc su dung");
                    if (res.status == 200) {
                        saveToken(res.token);
                        this.onSuccess();
                        AsyncStorage.getItem('@token')
                        .then(value => {
                            this.onFail(value);
                        })
                    }

                    ///////////////////////// chuyen man hinh
                })
                .catch((error) => {
                    this.onFail("Da xay ra loi!")
                })
        }

    }


    render() {
        return (
            <View style={registerStyles.background}>

                <View style={registerStyles.headerAndLogoContainer}>
                    <Text style={registerStyles.headerText}> ĐĂNG KÝ </Text>
                    {/* <Image style={styles.image} source={require('../../images/icons/vespa.png')}>
                    </Image> */}
                </View>



                <View style={registerStyles.formContainer}>

                    <View style={registerStyles.inputWrapper}>
                        <Image source={require('../../images/icons/username.png')}
                            style={registerStyles.textInputInlineImage}
                        />
                        <TextInput style={registerStyles.inputText}
                            placeholder='Ho va Ten'
                            autoCapitalize={'none'} //sentences, words, characters
                            returnKeyType={'next'}
                            autoCorrect={false}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={this.state.name}
                            onChangeText={(text) => this.setState({ name: text })}
                        />
                    </View>

                    <View style={registerStyles.inputWrapper}>
                        <Image source={require('../../images/icons/phone.png')}
                            style={registerStyles.textInputInlineImage}
                        />
                        <TextInput style={registerStyles.inputText}
                            placeholder='So dien thoai'
                            autoCapitalize={'words'} //sentences, words, characters
                            returnKeyType={'go'}
                            keyboardType={'numeric'}
                            autoCorrect={false}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={this.state.phoneNumber}
                            onChangeText={(text) => this.setState({ phoneNumber: text })}
                        />
                    </View>

                    <View style={registerStyles.inputWrapper}>
                        <Image source={require('../../images/icons/password.png')}
                            style={registerStyles.textInputInlineImage}
                        />
                        <TextInput style={registerStyles.inputText}
                            secureTextEntry={true}
                            placeholder='Mat khau'
                            autoCapitalize={'none'} //sentences, words, characters
                            returnKeyType={'next'}
                            autoCorrect={false}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    </View>

                    <View style={registerStyles.inputWrapper}>
                        <Image source={require('../../images/icons/password.png')}
                            style={registerStyles.textInputInlineImage}
                        />
                        <TextInput style={registerStyles.inputText}
                            secureTextEntry={true}
                            placeholder='Nhap lai mat khau'
                            autoCapitalize={'none'} //sentences, words, characters
                            returnKeyType={'done'}
                            placeholderTextColor='#6E6E6E'
                            underlineColorAndroid='transparent'
                            value={this.state.confirmPassword}
                            onChangeText={(text) => this.setState({ confirmPassword: text })}
                        />
                    </View>

                    <View style={registerStyles.buttonContainer}>
                        <TouchableOpacity style={registerStyles.button}
                            onPress={this.registerUser.bind(this)} >
                            <Text style={registerStyles.buttonText}> Tiep tuc </Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </View>
        );
    }
}


