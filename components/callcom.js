import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Linking, TouchableOpacity } from "react-native";
import Headercom from "../components/header";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"
import { data } from '../assets/mark';
import { sluzby } from '../assets/sluzby';
const Callcomp = (item, { phoneNumber }) => {
    const handlePhoneCall = () => {
        const phoneNumberToCall = `tel:${item.tel}`;
        Linking.openURL(phoneNumberToCall);
      };
    return(
        <View style={{paddingTop: 20 }}>
            <View style={{width: '96%', marginLeft: '2%', height: 100, backgroundColor: '#E0E0E0', borderWidth: 1, borderColor: 'gray', borderRadius: 30, justifyContent: 'center', paddingLeft: 10}}>
                <View style={{width:'80%', height: 'auto'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>{item.name}</Text>
                </View>
                <View style={{position: 'absolute', alignItems: 'flex-end', width: '100%', paddingRight: 20}}>
                    <TouchableOpacity onPress={handlePhoneCall}>
                        <View>
                            <Feather name="phone-call" size={35} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Callcomp;