
import React, { Component } from 'react';
import {
    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions, AsyncStorage
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


import styles from './searchStyle';
import getRecordByConditions from '../../api/getRecordByConditions';
import getToken from '../../api/getToken';
export default class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            startLocation: '',
            endLocation: '',
            vehicle: 1,
            startTime: '',
        };

    }

    onValueChange(value) {

        this.setState({
            vehicle: value
        });
    }

    getRecords = async () => {

        let _loc = this.state.startLocation.split(",");
        let _lat = parseFloat(_loc[0]);
        let _long = parseFloat(_loc[1]);


        let _startLocation = { lat: _lat, long: _long };
        let _radius = 100000;
        let _time = "2017-12-01 7:0";
        let _vehicle = this.state.vehicle;
        try {
            let token = await getToken();
            if(token){
                let _records = await getRecordByConditions(_startLocation, _vehicle, _radius, _time, token);
                
                //console.log({records: _records.records});
                // gui mang 
                return this.props.navigation.navigate('Result', {records: _records.records});
                
            }
            
        } catch (err) {
            console.log(err);
        }
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
                        <Title color='white'>Tìm chuyến đi</Title>
                    </Body>
                    <Right />
                </Header>

                <Content contentContainerStyle={styles.content}>
                    <ImageBackground source={require('../../images/pictures/post.jpg')} style={styles.background} >
                    <View style = { styles.contentInput }>
                    <Item regular style = { styles.input }>
                        <Icon name='map-marker' size={40} color='#8DDF83' />
                        <Input  placeholder="Điểm khởi hành" 
                            value={this.state.startLocation}
                            onChangeText={text => this.setState({ startLocation: text })}
                        />
                    </Item>
                    <Item regular style = { styles.input }>
                        <Icon name='map-marker' size={40} color='black' />
                        <Input placeholder="Điểm đến"  
                            value={this.state.endLocation}
                            onChangeText={text => this.setState({ endLocation: text })}
                        />
                    </Item>
                    <Item regular style = { styles.input }>
                        <Icon name='car' size={30} color='#8DDF83'  />


                        <Picker
                            style={styles.picker}
                            mode="dropdown"
                            headerBackButtonText="Quay lại"
                            placeholder='Phương tiện'
                            selectedValue={this.state.vehicle}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Xe máy" value={1} />
                            <Item label="Xe hơi" value={2} />
                            <Item label="Xe khách" value={3} />
                        </Picker>
                    </Item>
                    <Item style = { styles.contentTime} >
                        <Item style = { [{flex:1, paddingLeft: 10} ] }>
                            <Icon name='calendar' size={30}  color='#8DDF83' />
                            <Input placeholder="Ngày đi" />
                        </Item>
                        <Item style = { [{flex:1, paddingLeft: 10}]}>
                            <Icon name='clock-o' size={30} color='#8DDF83'  />
                            <Input placeholder="Giờ đi" 
                                value={this.state.startTime}
                                onChangeText={text => this.setState({ startTime: text })}
                            />
                        </Item>
                    </Item>

                    <TouchableOpacity onPress={this.getRecords} >
                            <View style={ styles.button }>
                                <Text style={ styles.buttonText } >TÌM</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                    </ImageBackground>

                </Content>
            </Container>



        );
    }
}

