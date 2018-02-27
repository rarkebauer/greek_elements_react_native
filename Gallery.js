import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Modal,
  Text,
  Button
} from 'react-native';

import fire from './elements/fire';
import water from './elements/water';
import earth from './elements/earth';
import air from './elements/air';

export default class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      fire,
      water,
      earth,
      air,
      modalVisible: false,
      currentImageIndex: 0,
      photos: []
    };
  }

  openModal(index) {
    this.setState({modalVisible: true, currentImageIndex: index});

  }

  closeModal() {
    this.setState({modalVisible: false});
  }
  renderGallery() {
    const photos = this.state[this.props.name];
    //this.setState({photos})
    return photos.map((item, index) => {
      let src = photos[index].src
        return (
            <View style={styles.item} key={item.label}>
              <TouchableHighlight onPress={() => this.openModal(index)}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    style={styles.photo}
                    source={src}
                />
              </TouchableHighlight>
            </View>
        );
    });
  }

  render(){
    let currentIndex = this.state.currentImageIndex
    return (
      <View style={styles.container}>

        <ScrollView style={styles.gallery}>
          { this.renderGallery() }
        </ScrollView>

        <View>
        <Modal
        visible={this.state.modalVisible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
            <View>
              <Text style={styles.title}>learn about {this.props.name}</Text>
              <Text style={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
            </View>
              <View style={styles.item} >
                <Image
                    resizeMode={Image.resizeMode.cover}
                    style={styles.photo}
                    source={this.state[this.props.name][currentIndex].src}
                />
              </View>
               <Button
                  onPress={() => this.closeModal()}
                  title="back to gallery"
              >
              </Button>

            </View>
          </View>
        </Modal>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  gallery: {
      flexDirection: 'column'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  photo: {
      flex: 1,
      margin: 0
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 25
  },
  title: {
    fontSize: 45,
    top: 0,
    marginTop: -275,
    marginBottom: 20,
    marginHorizontal: 10
  },
  text: {
    fontSize: 15,
    marginHorizontal: 4
  }
});
