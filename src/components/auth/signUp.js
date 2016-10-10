import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {firebaseApp} from './authentication';
import styles from '../../styles'

module.exports = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      result: '',
    }
  },
  signUp() {
    if (this.state.password == this.state.confirmPassword) {
      // Do anything with creating the user
      const {email, password} = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => this.setState({result: error.message}) );

    }else {
      // Set the result of state to password and confirmPassword need to match
      this.setState({result:'Password and Confirmation password must match.'})
    }

  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(text) => this.setState({email:text})}
        />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(text) => this.setState({password:text})}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm password'
        onChangeText={(text) => this.setState({confirmPassword:text})}
        secureTextEntry={true}
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
