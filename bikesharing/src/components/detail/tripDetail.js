import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Thumbnail, Tab, Tabs, TabHeading } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView from 'react-native-maps';
import styles from './tripDetailStyle';


const DEVICE_WIDTH = Dimensions.get('window').width;

export default class TripDetail extends Component {


    constructor(props) {
        super(props);


    }



    render() {
        return (




            <View style={styles.content}>
                <View style={styles.contentMap}>
                    <MapView
                        style={styles.map}
                        mapType='terrain'
                        initialRegion={{
                            latitude: 10.870380, longitude: 106.802921, latitudeDelta: 0.0622,
                            longitudeDelta: 0.0121
                        }}>
                        <MapView.Marker
                            coordinate={{ latitude: 10.849493, longitude: 106.800677 }}
                        />
                        <MapView.Marker
                            coordinate={{ latitude: 10.870380, longitude: 106.802921 }}
                        />
                        <MapView.Polyline
                            coordinates={[{ latitude: 10.849493, longitude: 106.800677 }, { latitude: 10.870380, longitude: 106.802921 }]}
                            strokeWidth={3}
                            strokeColor='red'

                        />
                    </MapView>
                </View>
                <View style={styles.contentPoint}>
                    <Item>
                        <Icon name='map-marker' size={40} />
                        <Label >Điểm đi</Label>
                        <Label  >270 Hồ Tùng Mậu P5 Quận 10 TPHCM đường trường sơn Bnh Thương Hòa Việt Nam</Label>
                    </Item>

                    <Item>
                        <Icon name='stop-circle' size={40} />
                        <Label >Điểm đến</Label>
                        <Label >Phương 5 Linh Trung Thủ Đức</Label>

                    </Item>

                </View>
                <View style={styles.contentTimeMoney}>
                    <View style={styles.contentTime}>
                        <View style={{ flex: 1 }} >
                            <Icon name='calendar' size={40} />
                        </View>
                        <View style={{ flex: 3 }} >
                            <View style={{ flexDirection: 'row' }}>
                                <Label >Ngày </Label>
                                <Label >1/1/2018</Label>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Label >Khởi hành </Label>
                                <Label >12:30</Label>
                            </View>
                        </View>

                    </View>
                    <View style={styles.contentMoney}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='usd' size={40} />
                            <Label style={styles.textMoney} >10 000</Label>
                        </View>
                    </View>
                </View>


            </View>



        );
    }
}

