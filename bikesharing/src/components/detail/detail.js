import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Thumbnail, Tab, Tabs, TabHeading } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView from 'react-native-maps';
import styles from './detailStyle';
import TripDetail from './tripDetail'
import TripUserProfile from './tripUserProfile'

export default class Detail extends Component {


    constructor(props) {
        super(props);


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
                        <Title color='white'>Bike Share</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.contentDetail}>
                        <View style={styles.contentLogo}>
                            <View style={{ marginRight: 10 }}>
                                <Thumbnail large source={{ uri: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg' }} />
                                <Label color='black' style={styles.userName}>CHI PU</Label>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Thumbnail large source={{ uri: 'https://www.hdsaison.com.vn/images/sanpham/Acruzpo.jpg' }} />
                                <Label color='black' style={styles.userName}>Xe máy </Label>
                            </View>
                        </View>
                        <View style={styles.contentDetailProfile}>
                            <Tabs initialPage={0}>
                                <Tab heading={<TabHeading style={styles.tabHeader}><Icon size={30} name="map-marker" /><Text style={styles.tabText}>Chuyến đi</Text></TabHeading>}>
                                    <TripDetail />
                                </Tab>
                                <Tab heading={<TabHeading style={styles.tabHeader}><Icon size={30} name="user-circle-o" /><Text style={styles.tabText}>Cá Nhân</Text></TabHeading>}>
                                    <TripUserProfile />
                                </Tab>

                            </Tabs>
                        </View>
                        <View style={styles.contentCall}>
                            <TouchableOpacity onPress={() => {


                            }} >
                                <View style={styles.callButton}>
                                    <Text style={styles.textCallButton} >Gọi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Content>
            </Container>



        );
    }
}

