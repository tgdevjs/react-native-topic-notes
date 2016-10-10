import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {firebaseApp} from './authentication';

import styles from '../../styles';

module.exports = React.createClass({
  getInitialState(){
    return {
      email:'',
      password:'',
      result:'',
    }
  },
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        console.log('user',user);
      }
    })
  },
  signIn() {
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error: ',error.message)
        this.setState({result: error.message});
      });
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={ (text) => this.setState({email: text})}
        />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={(text) => this.setState({password: text})}
        secureTextEntry={true}
      />
    <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
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
