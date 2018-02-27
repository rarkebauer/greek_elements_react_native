import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Gallery.js'
import FooterNav from './FooterNav'

export default class SinglePhoto extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
   // const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
          <Text>Rendering single view</Text>
          {/* <FooterNav navigate={navigate} /> */}
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
