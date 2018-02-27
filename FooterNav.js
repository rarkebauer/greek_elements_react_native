import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class FooterNav extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const navigate = this.props.navigate
    return (
      <View style={styles.nav}>
        <Ionicons name="md-bonfire" size={32} color="red" onPress={() =>
            navigate('Element', { name: 'fire' })} />
        <Ionicons name="md-flower" size={32} color="yellow" onPress={() => navigate('Element', { name: 'earth' })} />
        <Ionicons name="md-home" size={42} color="white" onPress={() =>
            navigate('Home')} />
        <Ionicons name="md-water" size={32} color="blue" onPress={() =>
            navigate('Element', { name: 'water' })} />
        <Ionicons name="md-thunderstorm" size={32} color="gray" onPress={() => navigate('Element', { name: 'air' })} />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});
