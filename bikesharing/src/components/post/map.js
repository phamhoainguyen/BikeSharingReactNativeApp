import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView from 'react-native-maps';


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
                        <Title color='white'>Bản đồ</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <View>
                    <MapView style={ styles.map }
                        mapType='terrain'
                        initialRegion={{
                            latitude: 10.870380, longitude: 106.802921, latitudeDelta: 0.0622,
                            longitudeDelta: 0.0121
                        }}>
                        <MapView.Marker
                            coordinate={{ latitude: 10.866050, longitude: 106.802213 }}
                        />
                        <MapView.Marker
                            coordinate={{ latitude: 10.870380, longitude: 106.802921 }}
                        />
                        <MapView.Polyline
                            coordinates={[{ latitude: 10.866050, longitude: 106.802213 }, { latitude: 10.870380, longitude: 106.802921 }]}
                            strokeWidth={3}
                            strokeColor='red'

                        />
                    </MapView>
                    <Button block style={styles.postButton}><Text style={styles.textButton}> Lưu </Text></Button>
                    </View>


                </Content>
            </Container>



        );
    }
}

