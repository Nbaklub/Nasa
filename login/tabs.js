import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TabBar = ({ onTabSelect, activeTab }) => {
  return (
    <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => onTabSelect('Login')}>
            <Text style={activeTab === 'Login' ? styles.activeTab : styles.inactiveTab}>Logowanie</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabSelect('Registration')}>
            <Text style={activeTab === 'Registration' ? styles.activeTab : styles.inactiveTab}>Rejestracja</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    tabContainer: {
      width: '90%',
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 25,
    },
    activeTab: {
        fontWeight: 'bold',
        color: 'orange',  // Zmienia kolor tekstu i podkreślenia na niebieski
        paddingBottom: 5,  // Dodaje odstęp między tekstem a podkreśleniem
        fontSize: 20
    },
    inactiveTab: {
      color: '#777',
      fontSize: 20
    }
  });

export default TabBar;
