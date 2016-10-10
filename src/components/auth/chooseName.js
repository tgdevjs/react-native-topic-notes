import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../../styles';
import {firebaseApp} from './authentication';

module.exports = React.createClass({
  getInitialState() {
    return {
      name: '',
    }
  },
  updateDisplayName() {
    let user = firebaseApp.auth().currentUser;
    user.updateProfile({
      displayName: this.state.name
    }).then( () => {
      this.props.navigator.push({name: 'topics'});
    })
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Choose a display name.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={ () => this.updateDisplayName()}
        >
          <Text style={styles.buttonText}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});
