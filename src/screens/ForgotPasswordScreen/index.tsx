import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { IC_FORGOTPASS, IC_GOBACK, IC_USER } from '../../assets';
import styles from './ForgotpassScreen.style';
const ForgotpassScreen = ({ navigation }: any) => {
  const [phone, setPhone] = React.useState('');

  const changePhone = (value: any) => setPhone(value);
  const handleSubmit = () => {
    var regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!regEx.test(phone)) {
      navigation.navigate('ForgotpassStepTwo');
    } else {
      Alert.alert('Incorrect phone number format');
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IC_GOBACK} style={styles.icBack} />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Forgot Password</Text>
      </View>
    );
  };

  const Content = () => {
    return (
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <View style={styles.bgImg}>
            <Image source={IC_FORGOTPASS} style={styles.imgPass} />
          </View>
        </View>

        <Text style={styles.txt}>
          Please enter your registered phonenumber.
        </Text>
        <Text style={styles.desc}>
          We will send a verification code to your registered phonenumber.
        </Text>

        <View style={styles.input}>
          <Image source={IC_USER} style={styles.imgUser} />
          <TextInput
            placeholder="Your phonenumber"
            style={styles.txtInput}
            keyboardType="number-pad"
            value={phone}
            onChangeText={(value) => changePhone(value)}
          />
        </View>

        <TouchableOpacity style={styles.btnNext} onPress={() => handleSubmit()}>
          <Text style={styles.txtBtn}>Next</Text>
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

export default ForgotpassScreen;
