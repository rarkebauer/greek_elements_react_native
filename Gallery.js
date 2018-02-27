import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

import fire from './elements/fire';
import water from './elements/water';
import earth from './elements/earth';
import air from './elements/air';
import SinglePhoto from './SinglePhoto'

export default class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      fire,
      water,
      earth,
      air,
      currentImageSrc: ''
    };
  }
  updateCurrentImage(src){
    this.setState({currentImageSrc: src})
  }
  renderGallery() {
    const photos = this.state[this.props.name];
    return photos.map((item, index) => {
      let src = photos[index].src
        return (
            <View style={styles.item} key={item.label}>
              <TouchableHighlight onPress={() => this.updateCurrentImage(src)}>
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
    console.log('current image', this.state.currentImageSrc)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.gallery}>
          { this.renderGallery() }
        </ScrollView>
        {/* {this.state.currentImageSrc.length && <SinglePhoto src={this.state.currentImageSrc} />} */}
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
  }
});
