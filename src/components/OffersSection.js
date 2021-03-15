import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Preview from '../Utils/Preview';

class OffersSection extends Component {
  state = {
    images: [
      {
        image: 'https://images.pexels.com/photos/5215021/pexels-photo-5215021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        image: 'https://images.pexels.com/photos/4492065/pexels-photo-4492065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        image:
          'https://images.pexels.com/photos/4429561/pexels-photo-4429561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        image:
          'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        image:
          'https://images.pexels.com/photos/5995194/pexels-photo-5995194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
  };

  render() {
    return (
      <FlatListSlider
        local={true}
        data={this.state.images}
        width={280}
        timer={3000}
        onPress={item => alert(JSON.stringify(item))}
        component={<Preview />}
        indicatorActiveWidth={20}
        indicatorActiveColor={'orange'}
        contentContainerStyle={styles.flatListSliderContainer}
        indicatorContainerStyle={styles.indicatorStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  flatListSliderContainer: {
    marginTop: '-4%',
    paddingHorizontal: 16,
    backgroundColor: 'white'
  },
  indicatorStyle: {
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});

export default OffersSection;
