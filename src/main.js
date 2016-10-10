import React from 'react';
import {
  Navigator
} from 'react-native';

import SignIn from './components/auth/signIn';

const routes = {
  signIn: SignIn
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
