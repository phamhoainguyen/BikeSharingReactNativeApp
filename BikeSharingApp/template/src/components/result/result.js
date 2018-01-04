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
            data: []
        };

    }


    componentDidMount() {
        let _records = this.props.navigation.state.params.records;
        var _data = this.state.data.slice();
        var _arrayLength = _records.length;
        //console.log(_arrayLength);
        for (var i = 0; i < _arrayLength; i++) {
            let _record = {
                recordID: _records[i]._id,
                name: _records[i].user_id.name,
                phone: _records[i].user_id.phoneNumber,
                sex: _records[i].user_id.gender,
                start: _records[i].startAddress,
                birthYear: _records[i].user_id.birthYear,
                city: _records[i].user_id.city,
                end: _records[i].endAddress,
                startLocation: _records[i].startLocation,
                endLocation: _records[i].endLocation,
                time: _records[i].startTime,
                // avatar: _records[i].user_id.profileImg,
                avatar: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg',
                price: _records[i].price,
            }
            
            this.state.data.push(_record);
            
        }
        //console.log(_data);
        //this.setState({ data: _data });
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }


    onFail(warnning) {
        Alert.alert(
            'Notice',
            warnning,
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
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
                                return <TouchableOpacity onPress={() => {
                                    console.log({record: item});
                                    return this.props.navigation.navigate('Detail', {record: item});
                                }}>
                                <View style={styles.rowContent}>
                                    <View style={{ flex: 1, padding: 7, alignItems: 'center', backgroundColor: '#C0C0CA', }}>
                                        <Thumbnail large source={{ uri: item.avatar }} />
                                        <Label style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }}>{item.name}</Label>

                                    </View>
                                    <View style={{ flex: 4, marginLeft: 5 }}>
                                        <View style={styles.pointContent}>
                                            <View style={{ flex: 1 }}>
                                                <Label style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }} >Điểm đi:</Label>
                                                <Label style={{ color: 'black', fontSize: 14 }}>{item.start}</Label>

                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Label style={{ color: '#F19137', fontWeight: 'bold', fontSize: 14 }}  >Điểm đến:</Label>
                                                <Label style={{ color: 'black', fontSize: 14, }}>{item.end}</Label>

                                            </View>

                                        </View>
                                        <View style={styles.timeContent}>
                                            <Icon name='clock-o' size={20} color='#81ba53' />
                                            <Label style={{ fontSize: 14 }}>  {item.time} </Label>
                                            <View style={{
                                                width: 120,
                                                height: 50,
                                                backgroundColor: '#81ba53',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Label style={{ color: 'white', fontSize: 14 }}> {item.price} VNĐ </Label>
                                            </View>
                                        </View>

                                    </View>
                                </View> 
                                </TouchableOpacity>

                            }}
                            
                            ItemSeparatorComponent={this.renderSeparator}

                        />
                    </View>
                </Content>

            </Container>




        );
    }
}

