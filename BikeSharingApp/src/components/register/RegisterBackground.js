import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
//import Dimensions from 'Dimensions';
export default class RegisterBackground extends Component {
    render() {
        return (
            <View style={styles.background}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgb(250, 200, 0)',
    },
});


