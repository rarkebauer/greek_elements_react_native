import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate('Element', { name: 'fire' })}
        >
          <Text> Fire </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate('Element', { name: 'earth' })}
        >
          <Text> Earth </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate('Element', { name: 'water' })}
        >
          <Text> Water </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate('Element', { name: 'air' })}
        >
          <Text> Air </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    margin: 15
  },
});
