import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import {firebaseApp} from './auth/authentication';

module.exports = React.createClass({
  getInitialState() {
    return {
      displayName: '',
    };
  },
  componentDidMount() {
    let user = firebaseApp.auth().currentUser;

    if (!user.displayName) {
      this.props.navigator.push({name: 'chooseName'})
    } else {
      this.setState({displayName: user.displayName});
    }
  },
  signOut() {
    // Sign out the user
    firebaseApp.auth().signOut()
      .then( () => {
        // SignOut successful
        this.props.navigator.popToTop();
      }, (error) => {
        console.log('SignOut error: ', error);
      });
  },
  render() {
    return (
      <View style={styles.topics}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.signOut()}>
            <Text style={styles.link}>
              Sign Out
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.state.displayName}
          </Text>
        </View>
        <View style={styles.body}>

        </View>
      </View>
    );
  }
});
