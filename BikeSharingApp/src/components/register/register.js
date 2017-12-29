import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    View,ImageBackground
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Toast, Left, Right } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './registerStyle';

const ACCESS_TOKEN = 'access_token';

export default class Register extends Component {



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
                        <Label style = { styles.text } >Tiếp tục</Label>
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
                                />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Số điện thoại'  style = { styles.text } />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Mật khẩu'  style = { styles.text } />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder='Xác nhận mật khẩu'   style = { styles.text }/>
                        </Item>
                    </View>
                  
                </Content>
                </ImageBackground>
            </Container>

        );
    }
}


