import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
Text,
} from 'react-native';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
export default class LoginButton extends Component {

    _onPress = () => {
        return 0;
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}>
                    <Text style={styles.text}> {this.props.buttonName} </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginTop: 30,

    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
})