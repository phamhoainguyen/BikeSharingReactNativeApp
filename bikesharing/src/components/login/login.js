import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions, Alert

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'


import styles from './loginStyles';
import signIn from '../../api/signIn';
import saveToken from '../../api/saveToken'

export default class Login extends Component {
    constructor(props) {
        super(props);
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
                    saveToken(res.user.token);
                    this.props.navigation.navigate('Default');
                    //this.onSuccess();
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


    redictRegister = () => {
        this.props.navigation.navigate('Register');
    }
    render() {
        const { phoneNumber, password } = this.state;
        return (
            <Container >
                <Content contentContainerStyle={ styles.content }>
                    <ImageBackground source={require('../../images/pictures/login.jpg')} style={ styles.background } >
                        <View style={ styles.logoContent } />

                        <View style={ styles.loginContent }>
                            <Item >
                                <Icon name='person' size={30} color='white' />
                                <Input 
                                    placeholderTextColor='white' 
                                    placeholder='Số điện thoại ' 
                                    style={ styles.text } 
                                    placeholder='So dien thoai'
                                    autoCapitalize={'words'} //sentences, words, characters
                                    returnKeyType={'go'}
                                    keyboardType={'numeric'}
                                    autoCorrect={false}
                                    value={phoneNumber}
                                    onChangeText={text => this.setState({ phoneNumber: text })}
                                />
                            </Item>

                            <Item>
                                <Icon name='lock' size={30} color='white' />
                                <Input 
                                    placeholderTextColor='white' 
                                    placeholder='Mật khẩu' 
                                    style={ styles.text }
                                    secureTextEntry={true}
                                    autoCapitalize={'none'} //sentences, words, characters
                                    returnKeyType={'next'}
                                    autoCorrect={false}
                                    value={password}
                                    onChangeText={text => this.setState({ password: text })}
                                />
                            </Item>

                            <TouchableOpacity 
                                onPress={this.onSignIn.bind(this)} >
                                <View style={ styles.button }>
                                    <Text style={ styles.buttonText } >ĐĂNG NHẬP</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <Label style={ styles.commonText } >Bạn chưa có tài khoản? </Label>
                                <TouchableOpacity 
                                    onPress={this.redictRegister}>
                                <   Label style={ styles.registerText } >Đăng ký</Label>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>



        );
    }
}

