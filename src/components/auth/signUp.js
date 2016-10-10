import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles'

module.exports = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
    }
  },
  signUp() {

  },
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(text) => this.setState({email:text})}
        />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(text) => this.setState({password:text})}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.signUp()}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => this.props.navigator.pop()}>
          <Text style={styles.link}>
            Already a member? Sign in.
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
});
