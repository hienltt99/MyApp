import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {LOGO_APP, MAIN_SCREEN} from '../../assets';
import styles from './IntroduceApp.style';

const IntroduceApp = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={MAIN_SCREEN} style={styles.image}>
        <View style={styles.banner}>
          <Image source={LOGO_APP} style={styles.logo} />
          <Text style={styles.txtBanner}>Welcome to FApp</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.btnSignUp}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.txtSignUp}>Sign up for FApp</Text>
          </TouchableOpacity>

          <View style={styles.btnLogin}>
            <Text style={styles.txt}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroduceApp;
