import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Headercom from "../components/header";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { MaterialIcons, Entypo } from "react-native-vector-icons"
import { data } from '../assets/mark';
import Callcomp from '../components/callcom';
import { sluzby } from '../assets/sluzby';
import { ScrollView } from 'react-native';
const Call_Screen = ({ navigation }) => {

    const handleNavigate = () => {
      // Przykład nawigacji do innej ścieżki za pomocą navigation.navigate
      navigation.navigate('Main');
    };
    return(
        <SafeAreaView style={{color: 'orange'}}>
            <TouchableOpacity onPress={handleNavigate}>
                <MaterialIcons name="close" size={50} color="black" />
            </TouchableOpacity>
            <ScrollView style={{height: 'auto', width: '100%',color: 'orange'}}>
                {sluzby.map((item) => Callcomp(item, item.tel))}
                <View style={{width: '100%', height: 50}}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Call_Screen;