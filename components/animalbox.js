import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { dogs } from '../assets/dogs';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    fullHolder: {
        width: 190,
        marginRight: 20, 
        backgroundColor: 'lightgray',
        borderRadius: 15
    },
  imageHolder: {
    width: 190,
    height: 115,
    overflow: 'hidden', 
    borderTopLeftRadius:15,
    borderTopRightRadius: 15 
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    fontSize: 18,
    marginTop: 7,
    paddingLeft: 10,
    fontWeight: '500'
  },
  years:{
    fontSize: 15,
    paddingRight: 15,
    marginTop: 7
  },
  flexBox:{
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grayText: {
    color: '#1f1f1f'
  },
  bottomSection: {
    height: 70,
    paddingBottom: 10,
    borderRadius: 15,
    elevation: 2
  }
});

export const AnimalBox = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.nav)}>
        <View style={styles.fullHolder}>
          <View style={styles.imageHolder}>
            <Image source={{ uri: item.url }} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.bottomSection}>
              <View style={styles.flexBox}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <View>
                <Text style={[{paddingLeft: 10}, styles.grayText, {paddingTop: 5}]}>{item.desc}</Text>
              </View>
          </View>
        </View>
    </TouchableOpacity>
  );
};