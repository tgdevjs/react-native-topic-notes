import React from 'react';
import {
  Navigator
} from 'react-native';

import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';

const routes = {
  signIn,
  signUp,
};

module.exports = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{name:'signIn'}}
        renderScene={this.renderScene}
      />
    )
  },
  renderScene(route, navigator) {
    let Component = routes[route.name];
    return (
      <Component
        navigator={navigator}
      />
    )
  }
});
