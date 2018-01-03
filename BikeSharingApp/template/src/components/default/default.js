import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Label, Center, Icon, Left, Body, Title, Right } from 'native-base'



export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  redictToSearching = () => {
    this.props.navigation.navigate('Search');
  }

  redictToPosting = () => {
    this.props.navigation.navigate('Post');
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'red' }}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Carpooling</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='person' />
            </Button>
          </Right>
        </Header>
        <Content style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.redictToSearching}>
            <Image
              style={{ flex: 1, marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5 }}
              source={require('../../images/pictures/hitch.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.redictToPosting}>
            <Image
              style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
              source={require('../../images/pictures/drive.jpg')}
            />
          </TouchableOpacity>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({




})