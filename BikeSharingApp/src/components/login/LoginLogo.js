import React, {Component} from 'react';
import {
    View, 
    StyleSheet,
    Image,
    Text
} from 'react-native';

export default class LoginLogo extends Component {
    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.text} > ĐĂNG NHẬP </Text>
                {/* <Image style={styles.image} source={require('../../images/icons/vespa.png')}/> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    image: {
        width: 250,
        height: 200,
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    }
});