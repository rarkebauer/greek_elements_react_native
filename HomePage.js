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
        <Text style={[styles.title, styles.button]}>Greek Element Gallery</Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ef4a4d'}]}
          onPress={() =>
            navigate('Element', { name: 'fire' })}
        >
          <Text style={styles.buttonText}> Fire </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ffe102'}]}
          onPress={() =>
            navigate('Element', { name: 'earth' })}
        >
          <Text style={styles.buttonText}> Earth </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#337be8'}]}
          onPress={() =>
            navigate('Element', { name: 'water' })}
        >
          <Text style={styles.buttonText}> Water </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'gray'}]}
          onPress={() =>
            navigate('Element', { name: 'air' })}
        >
          <Text style={styles.buttonText}> Air </Text>
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
    paddingHorizontal: 25,
    backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20
  },
  title: {
    fontSize: 40,
    marginTop: -70,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  outer: {
    flex: 1,
    justifyContent: 'center'
  }
});
