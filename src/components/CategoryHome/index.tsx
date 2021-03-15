import * as React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {category} from '../../mocks';
import styles from './CategoryHome.style';

interface Props {
  navigation: any;
}

const CategoryHome = (props: Props) => {
  const {navigation} = props;
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
    <View style={styles.category}>
      <FlatList
        data={category}
        numColumns={2}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default CategoryHome;
