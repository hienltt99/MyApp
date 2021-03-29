import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { BF_BANNER, IC_MENU, IC_SEARCH } from '../../assets';
import styles from './CategoryBreakfastScreen.style';

const CategoryBreakfastScreen = ({ navigation }: any) => {

  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={IC_MENU} style={styles.icMenu} />
        <Text style={styles.txtMenu}>Menu</Text>
        <Image source={IC_SEARCH} style={styles.icSearch} />
      </View>
    );
  };

  const Content = () => {
    return (
      <View style={styles.content}>
        <Image source={BF_BANNER} style={styles.imgBanner} />
        <Text style={styles.txt}>Breakfast</Text>
        <Text style={styles.txtDesc}>Perfectly baked, hearty and full or flavour - that's how to start a morning</Text>
        <TouchableOpacity style={styles.btnFullmenu} onPress={() => navigation.navigate("BreakfastFullname")}>
          <Text style={styles.txtFullname}>Full menu</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>

  );
};

export default CategoryBreakfastScreen;
