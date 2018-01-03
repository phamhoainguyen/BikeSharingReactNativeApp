import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Toast, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import global from '../global';
import styles from './registerStyle';
import register from '../../api/register';
import saveToken from '../../api/saveToken';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: '',
            name: '',
            password: '',
            confirmPassword: '',
        };
    }

    onSuccess = () => {
        Alert.alert(
            'Notice',
            'Dang ky thanh cong!',
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }


    onFail = (warnning) => {
        Alert.alert(
            'Notice',
            warnning,
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }

    removePhoneNumber = () => {
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
                    if(res.userID >= 0) {
                        let st = saveToken(res.token);
                        console.log(st);
                        //this.onSuccess();
                        global.userID = res.userID;
                        this.props.navigation.navigate('Default');
                    }
                    else {
                        return this.onFail("So dien thoai da duoc dang ky!");
                    }
                    ///////////////////////// chuyen man hinh
                })
                .catch((error) => {
                    return this.onFail("Da xay ra loi!")
                })
        }

    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../../images/pictures/login.jpg')} style = { styles.background }>
                <Header style = { styles.header }>
                    <Left>
                        <Button transparent>
                            <Icon name= 'arrow-back' color = 'white' size={30} />
                        </Button>
                    </Left>
                  
                    <Right>
                        <TouchableOpacity 
                            onPress={this.registerUser.bind(this)}>
                            <Label style = { styles.text } >Tiếp tục</Label>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    
                    <View style={styles.registerContent} >
                        <Item >
                            <Input
                                placeholder='Họ tên'
                                autoCapitalize='words' returnKeyType='go'
                                placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                style = { styles.text }
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}

                                />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Số điện thoại'  style = { styles.text } 
                                value={this.state.phoneNumber}
                                onChangeText={(text) => this.setState({ phoneNumber: text })}
                            />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Mật khẩu'  style = { styles.text } 
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({ password: text })}
                            />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Xác nhận mật khẩu'   style = { styles.text }
                                secureTextEntry={true}
                                value={this.state.confirmPassword}
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                            />
                        </Item>
                    </View>
                  
                </Content>
                </ImageBackground>
            </Container>

        );
    }
}


