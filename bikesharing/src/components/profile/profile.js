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
                        <Label size={20} style={styles.nameUser} > CHI PU Ó O O Ò </Label>
                        <Label style={styles.editPhotoText}> Thay đổi ảnh đại diện </Label>

                        <Item regular>
                            <Icon name='account-circle' size={30} />
                            <Input placeholder='Họ tên' />
                        </Item>

                        <Item regular>
                            <Icon name='perm-phone-msg' size={30} />
                            <Input placeholder='Số điện thoại di động' />
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
                                <Item label="Không chọn giới tính" value="no" />
                                <Item label="Nam" value="na" />
                                <Item label="Nữ" value="nu" />


                            </Picker>
                        </Item>

                        <Item regular>
                            <Icon name='cake' size={30} />
                            <Input placeholder='Độ tuổi' />
                        </Item>

                        <Item regular>
                            <Icon name='home' size={30} />
                            <Input placeholder='Thành phố sinh sống' />
                        </Item>
                        <Label style = { styles.signOut }>Thoát</Label>
                     </View>


                </Content>

            </Container>

        );
    }
}

