import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import Headercom from "../components/header";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { dogs } from '../assets/dogs';
import { AnimalBox } from '../components/animalbox';
import { data } from "../assets/mark"
const Main_Screen = ({ navigation }) => {
  const [znacznik, setznacznik] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fireData, setFireData] = useState([]);

  const [mapRegion, setMapRegion] = useState({
    latitude: 50.031131739999985, // Środek Polski
    longitude: 22.00143431999999, // Środek Polski
    latitudeDelta: 6.0, // Dla przybliżenia, dostosuj według swoich potrzeb
    longitudeDelta: 6.0, // Dla przybliżenia, dostosuj według swoich potrzeb
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Błąd krytyczny',
          'Wystąpił krytyczny błąd. Aplikacja zostanie zamknięta.',
          [
            {
              text: 'OK',
              onPress: () => {
                // Zamknij aplikację (działa tylko w trybie deweloperskim)
                if (__DEV__) {
                  console.log('Zamykanie aplikacji z powodu błędu krytycznego.');
                  // To jest dostępne tylko w trybie deweloperskim.
                  // W produkcji nie powinieneś zamykać aplikacji w ten sposób.
                  // W produkcyjnych aplikacjach nie masz kontroli nad zamknięciem.
                  // Użytkownik może zawsze zamknąć aplikację ręcznie.
                  // Dla testów i debugowania można to użyć.
                  // W rzeczywistej aplikacji zwykle wyświetlasz tylko komunikat i zachowujesz stabilność.
                  globalThis.process.exit(1);
                }
              },
            },
          ]
        );
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
          'https://firms.modaps.eosdis.nasa.gov/api/country/csv/a94e46e34cbf3b1ab356b36adf05d664/VIIRS_SNPP_NRT/POL/1'
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
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{ justifyContent: "flex-start", alignItems: "center", width: "100%", height: "100%" }}>
        <Headercom />
        <View style={styles.informacje}>
          <View style={styles.animalsSection}>
            <Text style={styles.thirdText}>{"ABC Ratowania życia i zdrowia"}</Text>
          </View>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardsHolder}>
            {dogs.map((item, index) => (
                    <AnimalBox key={index} item={item} index={index} navigation={navigation} />
                ))}  
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={{marginTop: '165%',width: '90%', height: 30, borderRadius: '25%', position: 'absolute', zIndex: 1, backgroundColor: '#FFC400', justifyContent: 'center', alignItems: 'center'}} onPress={() => {navigation.navigate('Report');}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Zgłoś Zagrożenie!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.maps} onPress={() => {navigation.navigate('Map');}}>
            <MapView style={styles.map} key={JSON.stringify(initialRegion)} initialRegion={initialRegion} showsUserLocation={true}   zoomEnabled={false} scrollEnabled={false} >
              
              {fireData.map((fire, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: fire.latitude,
                    longitude: fire.longitude,
                  }}
                >
                  {/* Użyj obrazka jako znacznika */}
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
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  informacje: {
    marginTop: '5%',
    width: '100%',
    height: '35%',
    padding: 10,

  }, map: {
    flex: 1,
  }, maps: {
    width: '95%',
    height: 400,
    marginTop: '5%',
    borderRadius: 50,
  }, animalsSection: {
    marginTop: 10,
  },
  thirdText: {
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 10,
  },
  cardsHolder: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Main_Screen;