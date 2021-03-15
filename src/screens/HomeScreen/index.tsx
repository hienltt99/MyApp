import * as React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {IC_MENU, IC_SEARCH} from '../../assets';
import styles from './HomeScreen.style';
import CategoryHome from '../../components/CategoryHome';

interface Props {
  navigation: any;
}

const HomeScreen = (props: Props) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={IC_MENU} style={styles.icMenu} />
        <Text style={styles.txtMenu}>Menu</Text>
        <Image source={IC_SEARCH} style={styles.icSearch} />
      </View>
    );
  };

  return (
    <View style={{height: '100%'}}>
      <Header />
      <CategoryHome navigation />
    </View>
  );
};

export default HomeScreen;
