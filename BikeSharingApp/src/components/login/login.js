import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            /*
            <Container  style={{ alignItems: 'center', justifyContent: 'center' ,flex:1}} >






                <Content contentContainerStyle={{ width: 200, height: 200, backgroundColor: 'black' }} >
                    
                            <Item >
                                <Input placeholderTextColor='white' placeholder='Số điện thoại di động' />
                            </Item>

                            <Item>
                                <Input placeholderTextColor='white' placeholder='Mật khẩu' />
                            </Item>
                           
                                    <Button bordered light >
                                        <Text style={{ color: 'white' }} >Đăng nhập</Text>
                                    </Button>
                            
                </Content>






            </Container>
            */

            <Container >
                <Content contentContainerStyle={{ flex: 1 }}>
                    <View style={{ backgroundColor: 'white', flex: 3 }} />

                    <View style={{ backgroundColor: 'black', flex: 2, alignItems: 'center' }}>
                        <Item >
                            <Input placeholderTextColor='white' placeholder='Số điện thoại di động' />
                        </Item>

                        <Item>
                            <Input placeholderTextColor='white' placeholder='Mật khẩu' />
                        </Item>

                        <TouchableOpacity  >
                            <View style={{
                                backgroundColor: 'transparent', borderRadius: 10,
                                borderWidth: 1, borderColor: 'white', padding: 20
                            }}>
                                <Text style={{ color: 'white' }} >Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Label style={{ color: 'white' }} >Bạn chưa có tài khoản?</Label>
                            <Label style={{ color: 'white' }} >Đăng ký</Label>
                        </View>


                    </View>

                </Content>
            </Container>



        );
    }
}

const styles = StyleSheet.create({



    //code cu
    /*
    container: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',
        //height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        // width: DEVICE_WIDTH - 40,
        height: 40,
        marginTop: 30,

    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    */


})