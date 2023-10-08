import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Headercom from "../components/header";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { MaterialIcons, Entypo, Feather, AntDesign, Ionicons } from "react-native-vector-icons"
import { data } from '../assets/mark';
import Callcomp from '../components/callcom';
import { sluzby } from '../assets/sluzby';
import { ScrollView } from 'react-native';
const Menu_Screen = ({ navigation }) => {

    const handleNavigate = () => {
      navigation.navigate('Main');
    };

    return(
        <SafeAreaView style={{color: 'orange'}}>
            <TouchableOpacity onPress={handleNavigate}>
                <MaterialIcons name="close" size={50} color="black" />
            </TouchableOpacity>
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 35}}>Menu Główne</Text>
                <View style={{width: '80%', borderBottomWidth: 2, borderColor: 'gray'}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop:20}} onPress={() => {navigation.navigate('Main');}}>
                        <Entypo name="home" size={35} color="black"/>
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Strona Główna</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop:15}} onPress={() => {navigation.navigate('Map');}}>
                        <Entypo name="map" size={35} color="black"/>
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Mapa Pożarów</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop:15}} onPress={() => {navigation.navigate('Call');}}>
                        <Feather name="phone-call" size={35} color="black" />
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Numery alarmowe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop:15, paddingBottom: 15}} onPress={() => {navigation.navigate('Steps');}}>
                        <Ionicons name="help-circle" size={35} color="black" />
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Jak zgłosić zagrożenie</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 35, marginTop: 20}}>Ustawienia</Text>
                <View style={{width: '80%'}}>        
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
                        <Feather name="settings" size={35} color="black"/>
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Ustawienia konta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
                        <AntDesign name="user" size={35} color="black"/>
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>Moje konto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
                        <Entypo name="info" size={35} color="black"/>
                        <Text style={{marginLeft: 8, fontWeight: '600', fontSize: 20}}>FAQ</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => {navigation.navigate('Login');}} style={{width: '80%', height: 50, backgroundColor: 'orange', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 150}}>
                    <Text style={{fontWeight:'bold', fontSize: 35}}>Zaloguj</Text>
                </TouchableOpacity>
            
            </View>
        </SafeAreaView>
    );
}
export default Menu_Screen;