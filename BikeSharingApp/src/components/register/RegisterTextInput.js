import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
    View,
    StyleSheet,
    TextInput,
    Image,
} from 'react-native';

export default class RegisterTextInput extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.source}
                    style={styles.inlineImg}
                />
                <TextInput style={styles.inputText}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    keyboardType={this.props.keyboardType}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor='#6E6E6E'
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputWrapper: {
        // flex: 1,
        // marginTop: 0,
        marginBottom: 15,
    },
    inputText: {
        width: DEVICE_WIDTH - 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        paddingLeft: 45,
        borderRadius: 20,
        marginHorizontal: 20,
        color: 'black',
        zIndex: 98,
    },
    inlineImg: {
        position: 'absolute',//relative
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
});