import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IC_EYE, IC_EYE_SHOW, IC_GOBACK, IC_KEY, IC_RESETPASS } from '../../assets';
import styles from './ForgotpassStepThree.style';
const ForgotpassStepThree = ({ navigation }: any) => {
  const [password, setPassword] = React.useState({
    newPass: '',
    passConfirm: ''
  })

  const [showNewPass, setShowNewPass] = React.useState(true);
  const [showPassConfirm, setShowPassConfirm] = React.useState(true);

  const changeNewPass = (value: any) => setPassword({ ...password, newPass: value })
  const changePassConfirm = (value: any) => setPassword({ ...password, passConfirm: value })

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
            <Image source={IC_RESETPASS} style={styles.imgPass} />
          </View>
        </View>

        <Text style={styles.txt}>
          Please enter a new password.
        </Text>

        <View style={styles.input}>
          <Image source={IC_KEY} style={styles.icKey} />
          <TextInput
            placeholder="New Password"
            style={styles.txtInput}
            value={password.newPass}
            onChangeText={(value) => changeNewPass(value)}
            secureTextEntry={showNewPass} />
          <TouchableOpacity onPress={() => setShowNewPass(!showNewPass)}>
            {showNewPass ? <Image source={IC_EYE} style={styles.icEye} /> : <Image source={IC_EYE_SHOW} style={styles.icEye} />}
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          <Image source={IC_KEY} style={styles.icKey} />
          <TextInput
            placeholder="Re-enter Password"
            style={styles.txtInput}
            value={password.passConfirm}
            onChangeText={(value) => changePassConfirm(value)}
            secureTextEntry={showPassConfirm} />
          <TouchableOpacity onPress={() => setShowPassConfirm(!showPassConfirm)}>
            {showPassConfirm ? <Image source={IC_EYE} style={styles.icEye} /> : <Image source={IC_EYE_SHOW} style={styles.icEye} />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnChangepass}
          onPress={() => navigation.navigate('ForgotpassStepThree')}>
          <Text style={styles.txtBtn}>Change password</Text>
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

export default ForgotpassStepThree;
