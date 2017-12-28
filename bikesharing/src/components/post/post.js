import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


import styles from './postStyle';

export default class Post extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pickValue: 'mo'
        };

    }

    onValueChange(value) {

        this.setState({
            pickValue: value
        });



    }

    render() {
        return (


            <Container >
                <Header style={styles.header} >
                    <Left>
                        <Button transparent>
                            <Icon name='angle-left' size={30} color='white' />
                        </Button>
                    </Left>
                    <Body>
                        <Title color='white'>Đăng chuyến đi</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                <ImageBackground source={require('../../images/pictures/post.jpg')} style={ styles.background } >
                    <View style = { styles.contentInput }>
                        <Item regular style = { styles.input }>
                            <Icon name='map-marker' size={30} color='#8DDF83' />
                            <Input  placeholder="Điểm khởi hành" />
                        </Item>
                        <Item regular style = { styles.input }>
                            <Icon name='map-marker' size={30} color='black' />
                            <Input placeholder="Điểm đến"  />
                        </Item>
                        <Item regular style = { styles.input }>
                            <Icon name='car' size={30} color='#8DDF83'  />


                            <Picker
                                style={styles.picker}
                                mode="dropdown"
                                headerBackButtonText="Quay lại"
                                placeholder='Phương tiện'
                                selectedValue={this.state.pickValue}

                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Xe máy" value="mo" />
                                <Item label="Xe hơi" value="car" />
                                <Item label="Xe khách" value="pas" />


                            </Picker>
                        </Item>
                        <View style = { styles.contentTime} >
                        <Item regular style = { [{flex:1} ] }>
                            <Icon name='calendar' size={30}  color='#8DDF83' />
                            <Input placeholder="Ngày khởi hành" />
                        </Item>
                        <Item   regular  style = { [{flex:1}]}>
                            <Icon name='clock-o' size={30} color='#8DDF83'  />
                            <Input placeholder="Giờ đi" />
                        </Item>
                        </View>


                        <Item regular style = { styles.input }>
                            <Icon name='money' size={30} color='#8DDF83' />
                            <Input placeholder="Gía tiền cho 1 chổ ngồi" />
                        </Item>
                        <Button block style={styles.postButton}><Text style={styles.textButton}> Đăng </Text></Button>




                    </View>
                 </ImageBackground>
                </Content>
            </Container>



        );
    }
}

