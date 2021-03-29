import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IC_GOBACK2 } from '../../assets';
import styles from './BreakfastFulllmenu.style';


const BreakfastFullname = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IC_GOBACK2} style={styles.icBack} />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Breakfast</Text>
      </View>
    )
  }

  const Favorite = () => {
    return (
      <View>

      </View>
    )
  }

  return (
    <View >
      <Header />
    </View>
  );
};

export default BreakfastFullname;