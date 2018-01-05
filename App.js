/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MarqueeText from "./MarqueeText";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={{flexDirection: 'row'}}>
            <MarqueeText textStyle={{fontSize: 20, color: 'red'}} style={{flex: 1, backgroundColor: 'transparent'}} text='测试文本一大堆的哈哈哈哈啊哈啊大力开发打开就发lalahaha测试文本一大堆的哈哈哈哈啊哈啊大力开发打开就发lalahaha'/>
        </View>
        <MarqueeText style={{width: 150, backgroundColor: 'blue'}} text='测试文本一大堆的哈哈哈哈啊哈啊；大力开发；打开就发'/>
        <MarqueeText style={{width: 150, backgroundColor: 'yellow'}} text='测试文本'/>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
