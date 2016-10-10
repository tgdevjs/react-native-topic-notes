import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles';

module.exports = React.createClass({
  getInitialState(){
    return {
      email:'',
      password:'',
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={ (text) => this.setState({email: text})}
        />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={(text) => this.setState({password: text})}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigator.push({name:'signUp'})}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
});
