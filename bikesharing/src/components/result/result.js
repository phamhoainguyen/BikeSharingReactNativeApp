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
                { name: 'Chi Pu', sex: 'Nữ', start: '870/23 Phố Hàng Mã Thị Xa Quận Huyện ', end: 'Phố đi bộ Thị Xã Quận Huyện', time: '1/1/2018 08:00AM', avatar: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg', price: '100.000' },
                { name: 'Minh', sex: 'Nam', start: 'Nhà Thờ Đức Bà Thị Xa Quận Huyện', end: 'Phố đi bộ Thị Xa Quận Huyện', time: '1/1/2018 08:00AM', avatar: 'http://giaoduc.net.vn/Uploaded/xuanhung/2012_06_14/ve-dep-cua-binh-minh-khien-nhieu-dan-ong-gen-ti-15.jpg', price: '200.000' },
                { name: 'Beckham', sex: 'Nam', start: 'SVD Thống Nhất Thị Xa Quận Huyện', end: 'Quân khu 7 Thị Xa Quận Huyện', time: '1/1/2018 08:00AM', avatar: 'https://media.gq.com/photos/56eb1c3f1740841549748e55/master/w_1600/david-beckham-gq-0416-2.jpg', price: '300.000' },
                { name: 'Messi', sex: 'Nam', start: 'SVD Thống Nhất Thị Xa Quận Huyện', end: 'Quân khu 7 Thị Xa Quận Huyện', time: '1/1/2018 08:00AM', avatar: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/882000/620x/Lionel-Messi-654296.jpg', price: 'Miễn Phí' },
                { name: 'Justatee', sex: 'Nam', start: 'SVD Thống Nhất Thị Xa Quận Huyện', end: 'Quân khu 7 Thị Xa Quận Huyện', time: '1/1/2018 08:00AM', avatar: 'https://avatar-nct.nixcdn.com/playlist/2015/01/01/9/e/c/b/1420086656394_500.jpg', price: 'Miễn Phí' }



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
                                /*
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
                                */
                                return <View style={styles.rowContent}>
                                    <View style={{ flex: 1, padding: 7, alignItems: 'center', backgroundColor: '#C0C0CA' }}>
                                        <Thumbnail large source={{ uri: item.avatar }} />
                                        <Label style = {{fontWeight:'bold',color:'black'}}>{item.name}</Label>

                                    </View>
                                    <View style={{ flex: 4 }}>
                                        <View style={styles.pointContent}>
                                            <View style={{ flex: 1 }}>
                                                <Label style = {{fontWeight:'bold',color:'black'}} >Điểm đi:</Label>
                                                <Label  style = {{color:'black'}}>{item.start}</Label>

                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Label style = { {color:'#F19137',fontWeight:'bold'} }  >Điểm đến:</Label>
                                                <Label  style = {{color:'black'}}>{item.end}</Label>


                                            </View>

                                        </View>
                                        <View style={styles.timeContent}>
                                            <Icon name='clock-o' size={30} color = '#81ba53'/>
                                            <Label>  {item.time} </Label>
                                            <View style={{
                                                width: 120,
                                                height: 50,
                                                backgroundColor: '#81ba53',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Label style={{ color: 'white' }}> $ {item.price} </Label>
                                            </View>
                                        </View>

                                    </View>
                                </View>

                            }}
                            keyExtractor={(item, index) => item.name}
                            ItemSeparatorComponent={this.renderSeparator}

                        />
                    </View>
                </Content>

            </Container>




        );
    }
}

