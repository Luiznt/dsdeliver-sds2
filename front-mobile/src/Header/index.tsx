import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
        <Image source = { require('../assets/logo.png')} />
      <Text>DS Delivery</Text>
    </View>
  );
}
   
const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C',
      height: 90,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent:'center'
  },
});

export default Header;