import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,

} from 'react-native';
import { Button, Text } from 'native-base';
import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
export default class RegisterButton extends Component {

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10,
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