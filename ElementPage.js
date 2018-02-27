import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Gallery from './Gallery.js'

export default class ElementPage extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const name = this.props.navigation.state.params.name
    return (

          <Gallery name={name} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
