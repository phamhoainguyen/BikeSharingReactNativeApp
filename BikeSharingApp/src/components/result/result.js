import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View, Text, ImageBackground, Image, FlatList
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Left, Right, Thumbnail, Body, Title } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './resultStyle'



export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Chi Pu', sex: 'Nữ', start: 'Phố Hàng Mã', end: 'Phố đi bộ', time: '1/1/2018 08:00AM', avatar: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg' },
                { name: 'Binh Minh', sex: 'Nam', start: 'Nhà Thờ Đức Bà', end: 'Phố đi bộ', time: '1/1/2018 08:00AM', avatar: 'http://giaoduc.net.vn/Uploaded/xuanhung/2012_06_14/ve-dep-cua-binh-minh-khien-nhieu-dan-ong-gen-ti-15.jpg' },
                { name: 'Beckham', sex: 'Nam', start: 'SVD Thống Nhất', end: 'Quân khu 7', time: '1/1/2018 08:00AM', avatar: 'https://media.gq.com/photos/56eb1c3f1740841549748e55/master/w_1600/david-beckham-gq-0416-2.jpg' },
                { name: 'Messi', sex: 'Nam', start: 'SVD Thống Nhất', end: 'Quân khu 7', time: '1/1/2018 08:00AM', avatar: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/882000/620x/Lionel-Messi-654296.jpg' }



            ]
        };

    }
    
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
             
              backgroundColor: "black",
             
            }}
          />
        );
      };
   
    render() {
        return (

            <Container>

                <Header style={styles.header} >
                    <Left>
                        <Button transparent>
                            <Icon name='angle-left' size={30} color='white' />
                        </Button>
                    </Left>
                    <Body>
                        <Title color='white'>Kết quả</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.content} >
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => {
                                return <View style={styles.rowContent}>
                                    <View style={styles.leftRowContent}>
                                        <Thumbnail large source={{ uri: item.avatar }} />
                                        <Label style={styles.sexText}> {item.sex}</Label>
                                    </View>
                                    <View style={styles.rightRowContent}>
                                        <Label style={styles.nameText}> {item.name}</Label>
                                        <View style={styles.informationContent} >
                                            <Icon name='map-marker' size={30} color='green' />
                                            <Label> {item.start} </Label>
                                        </View>
                                        <View style={styles.informationContent}>
                                            <Icon name='map-marker' size={30} color='red' />
                                            <Label> {item.end} </Label>
                                        </View>
                                        <View style={styles.informationContent} >
                                            <Icon name='calendar' size={30} />
                                            <Label> {item.time} </Label>
                                        </View>

                                    </View>

                                </View>

                            }}
                            keyExtractor = {(item, index) => item.name}
                            ItemSeparatorComponent={this.renderSeparator}

                        />
                    </View>
                </Content>

            </Container>



        );
    }
}

