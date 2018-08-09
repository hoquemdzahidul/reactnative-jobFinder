import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScrren extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render () {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />

      </View>
    );
  }
}

export default AuthScrren;
