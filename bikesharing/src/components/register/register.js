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
                        <Label style = { styles.text }>Tiếp tục</Label>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    
                    <View style={styles.registerContent} >
                        <Item >
                            <Input style={styles.text}
                                placeholderTextColor='white'
                                placeholder='Họ Tên'
                                autoCapitalize='words' returnKeyType='go' 
                                style = { styles.text }
                                />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Số điện thoại di động'  style = { styles.text } />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Mật khẩu'  style = { styles.text } />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Xắc nhận mật khẩu'   style = { styles.text }/>
                        </Item>
                    </View>
                  
                </Content>
                </ImageBackground>
            </Container>

        );
    }
}


