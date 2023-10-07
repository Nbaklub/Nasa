import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Entypo, Feather } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const Headercom = ({ navigator }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    // Przykład nawigacji do innej ścieżki za pomocą navigation.navigate
    navigation.navigate('Call');
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => {setToggleMenu(!toggleMenu)}}>
        <Entypo name="menu" size={50} color="black" />
      </TouchableOpacity>
      <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
        <Image style={{ width: 60, height: 60 }} source={{ uri: 'https://i.imgur.com/oXo43tf.png' }} />
      </View>
      <TouchableOpacity style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'flex-end', zIndex: 2, paddingRight: 10 }} onPress={handleNavigate}>
        <Feather name="phone-call" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    alignItems: 'center'
  },
});

export default Headercom;
