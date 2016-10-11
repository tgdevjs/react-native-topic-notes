import React from 'react';
import {
  Navigator
} from 'react-native';

import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';
import topics from './components/topics';
import topicDetail from './components/topicDetail';

const routes = {
  signIn,
  signUp,
  topics,
  chooseName,
  topicDetail,
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
    let {displayName, title, author, row_uid} = route;
    return (
      <Component
        navigator={navigator}
        displayName={displayName}
        title={title}
        author={author}
        row_uid={row_uid}
      />
    )
  }
});
