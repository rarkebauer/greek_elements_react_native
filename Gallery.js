import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
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
      air
    };
  }
  renderGallery() {
    const photos = this.state[this.props.name];
    return photos.map((item, index) => {
        return (
            <View style={styles.item} key={item.label}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    style={styles.photo}
                    source={photos[index].src} />
            </View>
        );
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.gallery}>
          { this.renderGallery() }
        </ScrollView>
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
