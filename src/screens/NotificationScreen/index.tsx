import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface NotificationScreenProps {}

const NotificationScreen = (props: NotificationScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {},
});
