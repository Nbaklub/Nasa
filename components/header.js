import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Entypo } from "react-native-vector-icons";

const Headercom = ({ navigator }) => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => {setToggleMenu(!toggleMenu)}}>
        <Entypo name="menu" size={50} color="black" />
      </TouchableOpacity>
      <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
        <Image style={{ width: 60, height: 60 }} source={{ uri: 'https://i.imgur.com/oXo43tf.png' }} />
      </View>
      {
        toggleMenu ? (
          <HamburgerMenu />
        ) : null
      }
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
