import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Headercom from "../components/header";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { Ionicons } from "react-native-vector-icons"
import { data } from '../assets/mark';
const Map_Screen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [fireData, setFireData] = useState([]);
  
    const [mapRegion, setMapRegion] = useState({
      latitude: 52.0, // Środek Polski
      longitude: 19.0, // Środek Polski
      latitudeDelta: 9, // Dla przybliżenia, dostosuj według swoich potrzeb
      longitudeDelta: 9, // Dla przybliżenia, dostosuj według swoich potrzeb
    });
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
        console.log(locationData);
      })();
    }, []);
  
    useEffect(() => {
      // Pobierz dane z API NASA FIRMS na podstawie kraju, daty i czujnika
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://firms.modaps.eosdis.nasa.gov//api/country/csv/d3a87f084e45048141a3518e510dc7c6/VIIRS_SNPP_NRT/POL/2/2023-10-06'
          );
          const textData = await response.text(); // Otrzymaj tekst odpowiedzi CSV
          const rows = textData.split('\n'); // Podziel tekst na wiersze
  
          // Przetwarzaj wiersze i twórz obiekty z danymi o pożarach
          const data = rows.slice(1).map((row) => {
            const [country_id, latitude, longitude, bright_ti4, scan, track, acq_date, acq_time, satellite, instrument, confidence, version, bright_ti5, frp, daynight] = row.split(',');
            return {
              country_id,
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              bright_ti4: parseFloat(bright_ti4),
              scan: parseFloat(scan),
              track: parseFloat(track),
              acq_date,
              acq_time: parseInt(acq_time),
              satellite,
              instrument,
              confidence: parseFloat(confidence),
              version,
              bright_ti5: parseFloat(bright_ti5),
              frp: parseFloat(frp),
              daynight,
            };
          });
  
          setFireData(data);
        } catch (error) {
          console.error('Error fetching fire data: ' + error.message);
        }
      };
  
      fetchData();
    }, []);
    const initialRegion = {
      latitude: location ? location.coords.latitude : mapRegion.latitude,
      longitude: location ? location.coords.longitude : mapRegion.longitude,
      latitudeDelta: mapRegion.latitudeDelta,
      longitudeDelta: mapRegion.longitudeDelta,
    };
  
    return (
        <View style={{flex: 1}}>
        <TouchableOpacity style={{marginLeft: '5%', marginTop: '185%',width: '90%', height: 30, borderRadius: '25%', position: 'absolute', zIndex: 1, backgroundColor: '#FFC400', justifyContent: 'center', alignItems: 'center'}} onPress={() => {navigation.navigate('Report');}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Zgłoś Zagrożenie!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', zIndex: 1, marginTop: 40,  marginLeft: 20}} onPress={() => {navigation.navigate('Main');}}>
            <Ionicons name="arrow-back" size={50} color="black"/>
        </TouchableOpacity>
        <MapView style={styles.map} key={JSON.stringify(initialRegion)} initialRegion={initialRegion} showsUserLocation={false}>
            {fireData.map((fire, index) => (
                <Marker
                    key={index}
                    coordinate={{
                    latitude: fire.latitude,
                    longitude: fire.longitude,
                    }}
                >
                    <Image
                        source={{ uri: 'https://i.imgur.com/oXo43tf.png' }}
                        style={{ width: 40, height: 40 }}
                    />
                </Marker>
            ))}
            {data.map((item, index) => (
                item.bool === 1 ? ( // Sprawdź, czy bool jest równy 1
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude,
                    }}
                  >
                    {/* Użyj obrazka jako znacznika */}
                    <Image
                      source={{ uri: 'https://i.imgur.com/oXo43tf.png' }}
                      style={{ width: 40, height: 40 }}
                    />
                  </Marker>
                ) : null // Jeśli bool nie jest równy 1, nie wyświetlaj markera
              ))}
        </MapView>
        </View>  
    );
  };
  
  const styles = StyleSheet.create({
    map: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute'

    },
  });
  
  export default Map_Screen;
   