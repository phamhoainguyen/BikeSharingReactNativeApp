import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Picker } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


import styles from './detailStyle';

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
                        <Title style={styles.titleStyle} color='white'>Chi tiết</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={styles.content}>
                <ImageBackground source={require('../../images/pictures/post.jpg')} style={ styles.background } >
                    <View style={styles.coverImage}>
                    <Image style={styles.profileImage} source={{ uri: 'https://znews-photo-td.zadn.vn/w480/Uploaded/bpivpbbp/2017_11_22/chipu.jpg' }} />
                        <Text style={styles.nameUser}> CHIPU Ò Ó O Ò </Text>
                        <Text style={styles.vehicle}> Xe máy </Text>
                    </View>
                    <View style={styles.tabContent}> 
                    </View>
                    <View style={styles.mapContent}>
                    </View>

                    <View style = { styles.mainContent }>
                        <View style={styles.detailInfo}>
                            <View style={styles.startItemStyle}>
                                <Text>Điểm đi: Đại học Công Nghệ Thông Tin, Linh Trung, Thủ Đức</Text>
                            </View>
                            <View style={styles.endItemStyle}>
                                <Text>Điểm đến: Bến Thành, Bến Nghé, Quận 1</Text>
                            </View>
                            <View style={styles.timeItemStyle}>
                                <Text>09:45 31-12-2017</Text>
                            </View>
                            <View style={styles.timeItemStyle}>
                                <Text>09:45 31-12-2017</Text>
                            </View>
                            <View style={styles.timeItemStyle}>
                                <Text>09:45 31-12-2017</Text>
                            </View>

                        </View>


                        <View style={styles.buttonCall}>
                            <TouchableOpacity style={styles.button}>
                                    <View >
                                        <Text >GỌI ĐIỆN</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                 </ImageBackground>
                </Content>
            </Container>



        );
    }
}

