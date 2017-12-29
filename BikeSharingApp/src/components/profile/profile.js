import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View, Text, ImageBackground, Image
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Left, Right, List, ListItem, Picker, Form } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './profileStyle'



export default class Verification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickValue: 'no'
        };

    }

    onValueChange(value) {

        this.setState({
            pickValue: value
        });



    }

    render() {
        return (
            
            <Container>

                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='close' color='white' size={30} />
                        </Button>
                    </Left>
                    <Right>
                        <Label style={styles.editText}>Sửa đổi</Label>
                    </Right>


                </Header>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.profileContent}>
                        <Image style={styles.profileImage} source={{ uri: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg' }} />
                        <Label size={18} style={styles.nameUser} > CHI PU Ó O O Ò </Label>
                        <Label style={styles.editPhotoText}> Đổi ảnh </Label>
                    </View>

                    <View style={styles.formProfile}> 
                        <Item >
                            <Icon name='account-circle' size={30} />
                            <Input placeholder='Họ tên' />
                        </Item>

                        <Item >
                            <Icon name='perm-phone-msg' size={30} />
                            <Input placeholder='Số điện thoại' />
                        </Item>
                        <Item>
                            <Icon name='wc' size={30} />
                            <Picker
                                style={styles.picker}
                                mode="dropdown"
                                headerBackButtonText="Quay lại"
                                placeholder='Giới tính'
                                selectedValue={this.state.pickValue}

                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Không" value="no" />
                                <Item label="Nam" value="na" />
                                <Item label="Nữ" value="nu" />


                            </Picker>
                        </Item>

                        <Item >
                            <Icon name='cake' size={30} />
                            <Input placeholder='Năm sinh' />
                        </Item>

                        <Item >
                            <Icon name='home' size={30} />
                            <Input placeholder='Thành phố sinh sống' />
                        </Item>
                        <TouchableOpacity style={styles.thoatButton}>
                            <Label style = { styles.signOut }>Thoát</Label>
                        </TouchableOpacity>
                        
                     </View>


                </Content>

            </Container>

        );
    }
}

