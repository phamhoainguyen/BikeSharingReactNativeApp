import React, { Component } from 'react';
import {
    StyleSheet,

    View
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center } from 'native-base'


export default class Register extends Component {
    render() {
        return (
            <Container>
                <Content style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ marginLeft: 20, marginTop: 100, margin: 20 }} >
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Họ Tên' />
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

