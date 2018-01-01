import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNGooglePlaces from 'react-native-google-places';


import styles from './postStyle';

export default class Post extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pickValue: 'mo',
            test: ''
        };

    }

    onValueChange(value) {

        this.setState({
            pickValue: value
        });



    }

    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal({
            type: 'address',
            country: 'VN',
          
          
        })
        .then((place) => {
            console.log(place);
            this.setState({
                test: place.address
            });
            // place represents user's selection from the
            // suggestions and it is a simplified Google Place object.
        })
        .catch(error => console.log('Loi ne ',error.message));  // error is a Javascript Error object
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
                        <Title style={styles.titleStyle} color='white'>Đăng chuyến đi</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <ImageBackground source={require('../../images/pictures/post.jpg')} style={styles.background} >
                        <View style={styles.contentInput}>
                            <Item regular style={styles.input}>
                                <Icon name='map-marker' size={40} color='#8DDF83' />
                                <Input placeholder="Điểm khởi hành"  onTouchStart = {this.openSearchModal.bind(this)} value = {this.state.test} />
                            </Item>
                            <Item regular style={styles.input}>
                                <Icon name='map-marker' size={40} color='black' />
                                <Input placeholder="Điểm đến" />
                            </Item>
                            <Item regular style={styles.input}>
                                <Icon name='car' size={30} color='#8DDF83' />


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
                            <Item style={styles.contentTime} >
                                <Item style={[{ flex: 1, paddingLeft: 10 }]}>
                                    <Icon name='calendar' size={30} color='#8DDF83' />
                                    <Input placeholder="Ngày đi" />
                                </Item>
                                <Item style={[{ flex: 1, paddingLeft: 10 }]}>
                                    <Icon name='clock-o' size={30} color='#8DDF83' />
                                    <Input placeholder="Giờ đi" />
                                </Item>
                            </Item>


                            <Item regular style={styles.input}>
                                <Icon name='money' size={30} color='#8DDF83' />
                                <Input placeholder="Giá tiền" />
                            </Item>
                            <TouchableOpacity onPress={() => {
                                //this.props.navigation.navigate('Map');
                              
                            }} >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText} >ĐĂNG</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Content>
            </Container>



        );
    }
}

