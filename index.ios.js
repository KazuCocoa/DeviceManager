/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * http://shoutem.github.io/docs/ui-toolkit/components/
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
 } from 'react-native';
import {
  Text,
  Button,
  View,
  ListView,
  Tile,
  Title,
  Subtitle,
  Overlay,
  Screen,
  Heading,
  NavigationBar
 } from '@shoutem/ui';

export default class DeviceManager extends Component {
  render() {
    return (
      <Screen>
        <NavigationBar
          centerComponent={<Title>TITLE</Title>}
        />

        <View styleName="horizontal flexible">
          <Button styleName="confirmation">
            <Text>REMOVE</Text>
          </Button>

          <Button styleName="confirmation dark">
            <Text>UPDATE</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}

AppRegistry.registerComponent('DeviceManager', () => DeviceManager);
