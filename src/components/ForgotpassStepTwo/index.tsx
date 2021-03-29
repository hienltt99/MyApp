import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IC_GOBACK, IC_VERIFICATION} from '../../assets';
import VerificationCode from '../VerificationCode';
import styles from './ForgotpassStepTwo.style';
const ForgotpassStepTwo = ({navigation}: any) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IC_GOBACK} style={styles.icBack} />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Back</Text>
      </View>
    );
  };

  const Content = () => {
    return (
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <View style={styles.bgImg}>
            <Image source={IC_VERIFICATION} style={styles.imgPass} />
          </View>
        </View>

        <Text style={styles.txt}>
          Please enter your registered phonenumber.
        </Text>
        <Text style={styles.desc}>
          We will send a verification code to your registered phonenumber.
        </Text>

        {/* Verification Code */}
        <VerificationCode />

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('ForgotpassStepThree')}>
          <Text style={styles.txtBtn}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

export default ForgotpassStepTwo;
