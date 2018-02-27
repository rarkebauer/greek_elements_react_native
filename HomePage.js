import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FooterNav from './FooterNav'


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
          style={[styles.button, {backgroundColor: '#ef4a4d'}]}
          onPress={() =>
            navigate('Element', { name: 'fire' })}
        >
          <Text> Fire </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ffe102'}]}
          onPress={() =>
            navigate('Element', { name: 'earth' })}
        >
          <Text> Earth </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#337be8'}]}
          onPress={() =>
            navigate('Element', { name: 'water' })}
        >
          <Text> Water </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'gray'}]}
          onPress={() =>
            navigate('Element', { name: 'air' })}
        >
          <Text> Air </Text>
        </TouchableOpacity>
        <FooterNav navigate={navigate} />
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
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
});
