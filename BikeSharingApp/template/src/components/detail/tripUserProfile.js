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
    }



    render() {

        return (
            <View >
            <Item regular>
                <Icon name='user-circle' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.props.name}/>
            </Item>

            <Item regular>
                <Icon name='phone-square' size={30} />
                <Input editable={false} selectTextOnFocus={false} value = {this.props.phoneNumber}/>
            </Item> 
            <Item regular>
                <Icon name='transgender' size={30} />
                {/* <Input editable={false} selectTextOnFocus={false}  value = {this.props.gender}/> */}
            </Item>

            <Item regular>
                <Icon name='birthday-cake' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.props.birthYear}/>
                
            </Item>

            <Item regular>
                <Icon name='home' size={30} />
                <Input editable={false} selectTextOnFocus={false}  value = {this.props.city}/>
            </Item>
           
            
         </View>



         



        );
    }
}

