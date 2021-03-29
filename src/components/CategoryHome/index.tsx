import * as React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { category } from '../../mocks';
import { IC_MENU, IC_SEARCH } from '../../assets';
import styles from './CategoryHome.style';
import { DrawerActions } from '@react-navigation/native';

interface Props {
  navigation: any;
}

const CategoryHome = (props: Props) => {
  const { navigation } = props;
  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={IC_MENU} style={styles.icMenu} />
        </TouchableOpacity>
        <Text style={styles.txtMenu}>Menu</Text>
        <Image source={IC_SEARCH} style={styles.icSearch} />
      </View>
    );
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate(item.destination)}>
        <Image source={item.image} style={styles.imgItem} />
        <Text style={styles.nameItem}>{item.name}</Text>
        <Text style={styles.descItem}>{item.desc}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Header />
      <View style={styles.category}>
        <FlatList
          data={category}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>

  );
};

export default CategoryHome;
