import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'


import styles from './loginStyles';

export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (


            <Container >
                <Content contentContainerStyle={ styles.content }>
                    <ImageBackground source={require('../../images/pictures/login.jpg')} style={ styles.background } >
                        <View style={ styles.logoContent } />

                        <View style={ styles.loginContent }>
                            <Item >
                                <Icon name='person' size={30} color='white' />
                                <Input placeholderTextColor='white' placeholder='Số điện thoại di động ' style={ styles.text } />
                            </Item>

                            <Item>
                                <Icon name='lock' size={30} color='white' />
                                <Input placeholderTextColor='white' placeholder='Mật khẩu' style={ styles.text } />
                            </Item>

                            <TouchableOpacity  >
                                <View style={ styles.button }>
                                    <Text style={ styles.buttonText } >ĐĂNG NHẬP</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                                <Label style={ styles.text } >Bạn chưa có tài khoản?</Label>
                                <Label style={ styles.text }  >Đăng ký</Label>
                            </View>


                        </View>
                    </ImageBackground>
                </Content>
            </Container>



        );
    }
}

