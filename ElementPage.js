import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Gallery from './Gallery.js'
import FooterNav from './FooterNav'

export default class ElementPage extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const name = this.props.navigation.state.params.name
    const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
          <Gallery name={name} />
          <FooterNav navigate={navigate} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});
