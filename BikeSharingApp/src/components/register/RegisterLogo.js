import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

export default class RegisterLogo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> ĐĂNG KÝ </Text>
                {/* <Image style={styles.image} source={require('../../images/icons/vespa.png')}>
                </Image> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    image: {
        width: 200,
        height: 150,
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    }
});
