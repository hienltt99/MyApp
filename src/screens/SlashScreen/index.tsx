import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {BG_LOGO, LOGO_APP} from '../../assets';
import styles from './SlashScreen.style';

const SlashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG_LOGO} style={styles.image}>
        <Image source={LOGO_APP} style={styles.img} />
      </ImageBackground>
    </View>
  );
};

export default SlashScreen;
