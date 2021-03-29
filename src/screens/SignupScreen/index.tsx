import * as React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IC_CHECKBOX,
  IC_GOBACK2,
  IC_MAIL,
  IC_PASSWORD,
  IC_USER2,
  SIGNUP_SCREEN,
} from '../../assets';
import styles from './SignupScreen.style';
import { useDispatch } from 'react-redux';
import { signupAccount } from '../../redux/actions/UserAction';

const SignupScreen = ({ navigation }: any) => {
  const [checkBox, setCheckBox] = React.useState(false);
  const confirm = () => setCheckBox(!checkBox);

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const inputData = [
    {
      id: 1,
      placeholder: 'Name',
      icon: IC_USER2,
      func: (value: any) => setUsername( value ),
      secure: false,
      value: username,
      capitalize: 'words',
    },
    {
      id: 2,
      placeholder: 'Email',
      icon: IC_MAIL,
      func: (value: any) => setEmail( value ),
      secure: false,
      value: email,
      capitalize: 'none',
    },
    {
      id: 3,
      placeholder: 'Password',
      icon: IC_PASSWORD,
      func: (value: any) => setPassword( value ),
      secure: true,
      value: password,
      capitalize: 'none',
    },
  ];

  const checkData = () => {
    if (username.length == 0) {
      Alert.alert('Names cannot be empty');
      return false;
    }

    if (username.length <= 6) {
      Alert.alert('Names must be greater than 6 characters');
      return false;
    }

    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regEx.test(email)) {
      Alert.alert('Email invalidate');
      return false;
    }

    if (password.length < 8) {
      Alert.alert('Password must be greater than 8 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!checkData() && checkBox) {
      try {
        const payload = {
          access_token: '',
          expired_time: '',
          name: username,
          email: email,
          password: password,
          address: '',
          avatar: '',
          user_id: '',
          gender: '',
          phone: '',
        };
        dispatch(signupAccount(payload));
        console.log(payload);
        navigation.navigate('HomeStack');
      } catch (err) {
        console.log('====================================');
        console.log('err sign up : ', err);
        console.log('====================================');
      }
    }
  };

  const Header = () => (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Image source={IC_GOBACK2} style={styles.icBack} />
        <Text style={styles.txtHeader}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create new account</Text>
    </View>
  );

  const renderItem = (item: any) => (
    <View style={styles.input}>
      <Image source={item.icon} style={styles.icInput} />
      <TextInput
        placeholder={item.placeholder}
        onChangeText={item.func}
        secureTextEntry={item.secure}
        style={styles.txtInput}
        value={item.value}
        autoCapitalize={item.capitalize}
      />
    </View>
  );

  const SignupContainer = () => (
    <View style={styles.content}>
      <FlatList
        data={inputData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.confirm}>
        {!checkBox ? (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => confirm()}></TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.checkboxed} onPress={() => confirm()}>
              <Image source={IC_CHECKBOX} style={styles.icCheckbox} />
            </TouchableOpacity>
          )}
        <Text style={styles.agree}>I agree to the </Text>
        <Text style={styles.terms}>Terms & Conditions</Text>
      </View>
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text style={styles.btnCreate}>Create account</Text>
      </TouchableOpacity>
    </View>
  );

  const Footer = () => (
    <TouchableOpacity
      style={styles.footer}
      onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.txt}>Already a User ? </Text>
      <Text style={styles.txt}>Log in</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={SIGNUP_SCREEN} style={styles.image}>
        <Header />
        <SignupContainer />
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;
