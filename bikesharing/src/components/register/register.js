import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    View
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Toast } from 'native-base'

const ACCESS_TOKEN = 'access_token';

export default class Register extends Component {

    

    render() {
        return (
            <Container>
                <Content style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ marginLeft: 20, marginTop: 100, margin: 20 }} >
                        <Item >
                            <Input style={{ color: 'white'}}
                                placeholderTextColor='white' 
                                placeholder='Họ Tên' 
                                autoCapitalize='words' returnKeyType='go' />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Số điện thoại di động' />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Mật khẩu' />
                        </Item>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Xắc nhận mật khẩu' />
                        </Item>
                    </View>
                </Content>
            </Container>

        );
    }
}


const styles = StyleSheet.create({


});