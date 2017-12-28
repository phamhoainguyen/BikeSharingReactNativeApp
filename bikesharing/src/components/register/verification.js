import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View, Text, ImageBackground
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Left,Right } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './verificationStyle'


export default class Verification extends Component {
    render() {
        return (
            <Container>
                <ImageBackground source={require('../../images/pictures/login.jpg')} style={styles.background}>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' color='white' size={30} />
                            </Button>
                        </Left>
                        <Right>
                           
                        </Right>


                    </Header>
                    <Content contentContainerStyle={styles.content}>
                        <View style={styles.guideContent}>
                            <Label style={styles.text} >Nhập mã code vừa được gửi vào số điện thoại bạn đăng ký</Label>
                        </View>
                        <View style={styles.verifyNumberContent}>
                            <Item style={styles.input}>
                                <Input placeholderTextColor='white' style = { styles.text } />
                            </Item>
                            <Item style={styles.input}>
                                <Input placeholderTextColor='white'  style = { styles.text } />
                            </Item>
                            <Item style={styles.input}>
                                <Input placeholderTextColor='white'  style = { styles.text }/>
                            </Item>
                            <Item style={styles.input}>
                                <Input placeholderTextColor='white'  style = { styles.text }/>
                            </Item>

                        </View>
                        <View style={styles.verifyContent}>
                            <TouchableOpacity  >
                                <View style={styles.verifyButton}>
                                    <Text style={styles.text} >Xác thực</Text>
                                </View>

                            </TouchableOpacity>
                        </View>

                    </Content>
                </ImageBackground>
            </Container>

        );
    }
}

