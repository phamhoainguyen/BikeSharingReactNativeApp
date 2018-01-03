import React, { Component } from 'react';
import {

    TouchableOpacity,
    View, Text, Image, ImageBackground, Dimensions

} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Left, Right, Body, Title, Thumbnail, Tab, Tabs, TabHeading } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './tripUserProfileStyle';


const DEVICE_WIDTH = Dimensions.get('window').width;

export default class TripUserProfile extends Component {


    constructor(props) {
        super(props);
        this.state.user = this.props.user;
    }



    render() {

        return (

            <View > 
            <Item regular>
                <Icon name='user-circle' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.state.user.name}/>
            </Item>

            <Item regular>
                <Icon name='phone-square' size={30} />
                <Input editable={false} selectTextOnFocus={false} value = {this.state.user.phoneNumber}/>
            </Item> 
            <Item regular>
                <Icon name='transgender' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.state.user.gender}/>
            </Item>

            <Item regular>
                <Icon name='birthday-cake' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.state.user.birthYear}/>
                
            </Item>

            <Item regular>
                <Icon name='home' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.state.user.city}/>
            </Item>
           
            
         </View>



         



        );
    }
}

