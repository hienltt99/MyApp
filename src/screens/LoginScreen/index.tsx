import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IC_FACEBOOK, IC_GOBACK, LOGIN_SCREEN} from '../../assets';
import styles from './LoginScreen.style';

interface Props {
  navigation: any;
}

const LoginScreen = (props: Props) => {
  const {navigation} = props;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const changeEmail = (value: any) => setUser({...user, email: value});
  const changePassword = (value: any) => setUser({...user, password: value});

  const handleSubmitSignIn = (e: any) => {
    e.preventDefault();
    if (user.email == 'admin' && user.password == '123') {
      navigation.navigate('HomeScreen');
      console.log('ok');
    } else {
      console.log(user);
      Alert.alert('Email or password wrong');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={LOGIN_SCREEN} style={styles.image}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IC_GOBACK} style={styles.ic_back} />
          </TouchableOpacity>
          <Text style={styles.txtHeader}>Sign in</Text>
        </View>

        <View style={styles.signinContainer}>
          <TouchableOpacity style={styles.signinFB}>
            <Image source={IC_FACEBOOK} style={styles.ic_fb} />
            <Text style={styles.txt}>Sign in with facebook</Text>
          </TouchableOpacity>

          <View style={styles.txtInput}>
            <TextInput
              placeholder="Email"
              style={styles.inputEmail}
              value={user.email}
              onChangeText={(value) => changeEmail(value)}
            />
            <TextInput
              placeholder="Password"
              value={user.password}
              onChangeText={(value) => changePassword(value)}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={styles.btnSignIn}
            onPress={(e) => handleSubmitSignIn(e)}>
            <Text style={styles.txt}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.forgotPass}>Forgot your password?</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
