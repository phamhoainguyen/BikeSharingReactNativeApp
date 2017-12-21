import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View, Text
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label } from 'native-base'


export default class Verification extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
                        <Label style={{ color: 'white' }} >Nhập mã code vừa được gửi vào số điện thoại bạn đăng ký</Label>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Item  style={{ flex: 1,marginLeft:10,marginRight:10 }}>
                            <Input placeholderTextColor='white' />
                        </Item>
                        <Item  style={{ flex: 1,marginLeft:10,marginRight:10  }}>
                            <Input placeholderTextColor='white' />
                        </Item>
                        <Item  style={{ flex: 1 ,marginLeft:10,marginRight:10 }}>
                            <Input placeholderTextColor='white' />
                        </Item>
                        <Item  style={{ flex: 1 ,marginLeft:10,marginRight:10 }}>
                            <Input placeholderTextColor='white' />
                        </Item>

                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity  >
                            <View style={{
                                backgroundColor: 'transparent', borderRadius: 10,
                                borderWidth: 1, borderColor: 'white', padding: 20, flex: 1,marginLeft:10,marginRight:10,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ color: 'white' }} >Xác thực</Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                </Content>
            </Container>

        );
    }
}

