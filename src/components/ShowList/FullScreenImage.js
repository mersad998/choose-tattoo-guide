import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import {assetsObject} from 'utils/constants/assets';

export default function FullScreenImage(props) {
  return (
    <View style={styles.Container}>
      <Image
        source={assetsObject[props.navigation.getParam('id', 'logo')]}
        style={styles.MainImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
