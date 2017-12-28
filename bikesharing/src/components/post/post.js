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
                    <View>
                        <Item>
                            <Icon name='map-marker' size={30} color='green' />
                            <Input placeholder="Điểm khởi hành" />
                        </Item>
                        <Item>
                            <Icon name='map-marker' size={30} color='red' />
                            <Input placeholder="Điểm đến" />
                        </Item>
                        <Item>
                            <Icon name='car' size={30} />


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

                        <Item>
                            <Icon name='calendar' size={30} />
                            <Input placeholder="Ngày khởi hành" />
                        </Item>
                        <Item>
                            <Icon name='clock-o' size={30} />
                            <Input placeholder="Giờ đi" />
                        </Item>



                        <Item>
                            <Icon name='money' size={30} />
                            <Input placeholder="Gía tiền cho 1 chổ ngồi" />
                        </Item>
                        <Button block style={styles.postButton}><Text style={styles.textButton}> Đăng </Text></Button>




                    </View>

                </Content>
            </Container>



        );
    }
}

