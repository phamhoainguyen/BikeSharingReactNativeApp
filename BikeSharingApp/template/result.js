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
        console.log(_records);
        var _data = this.state.data.slice();
        var _arrayLength = _records.length;
        for (var i = 0; i < _arrayLength; i++) {
            let _record = {
                recordID:   _records[i]._id,
                name:       _records[i].user_id.name, 
                sex:        _records[i].user_id.gender, 
                start:      _records[i].startAddress, 
                end:        _records[i].endAddress, 
                time:       _records[i].startTime, 
                avatar:     _records[i].user_id.profileImg,
                price:      _records[i].price, 
            }
            _data.push(_record)
        }
        //console.log(_data);
        this.setState({ data: _data });
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


    _keyExtractor = (item, index) => item.recordID;

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
                            keyExtractor={this._keyExtractor}
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
                                    <View style={{ flex: 1, padding: 7, alignItems: 'center', backgroundColor: '#C0C0CA', }}>
                                        <Thumbnail large source={{ uri: item.avatar }} />
                                        <Label style = {{fontWeight:'bold',color:'black', fontSize: 14}}>{item.name}</Label>

                                    </View>
                                    <View style={{ flex: 4, marginLeft: 5 }}>
                                        <View style={styles.pointContent}>
                                            <View style={{ flex: 1 }}>
                                                <Label style = {{fontWeight:'bold',color:'black', fontSize: 14}} >Điểm đi:</Label>
                                                <Label  style = {{color:'black', fontSize: 14}}>{item.start}</Label>

                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Label style = { {color:'#F19137',fontWeight:'bold', fontSize: 14} }  >Điểm đến:</Label>
                                                <Label  style = {{color:'black', fontSize: 14,}}>{item.end}</Label>

                                            </View>

                                        </View>
                                        <View style={styles.timeContent}>
                                            <Icon name='clock-o' size={20} color = '#81ba53'/>
                                            <Label style={{fontSize: 14}}>  {item.time} </Label>
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

