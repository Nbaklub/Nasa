import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { getDatabase, ref, set } from "firebase/database";
import * as Location from "expo-location";
import { initializeApp } from 'firebase/app';
import { data } from '../assets/mark';
import { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCGds_FhWfg3Llpny02mVZ2GduNMZ2DbF0",
  authDomain: "firms-f49e3.firebaseapp.com",
  databaseURL: "https://firms-f49e3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firms-f49e3",
  storageBucket: "firms-f49e3.appspot.com",
  messagingSenderId: "347571077063",
  appId: "1:347571077063:web:7c63889cec0af1b2b963e2",
  measurementId: "G-MQWNFGZCGV"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Report_Screen = ({ navigation }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [coSiePali, setCoSiePali] = React.useState("");
  const [czyOsobaRanna, setCzyOsobaRanna] = React.useState("");
  const [czyOsobaZagrozona, setCzyOsobaZagrozona] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLatitude(locationData.coords.latitude.toString());
      setLongitude(locationData.coords.longitude.toString());
    })();
  }, []);

  const handleZglosClick = () => {
      data[0].bool = 1;
      const zgloszenieRef = ref(database, "zgloszenia");
      const zgloszenie = {
      coSiePali,
      czyOsobaRanna,
      czyOsobaZagrozona,
      latitude,
      longitude,
    };

    set(zgloszenieRef, zgloszenie)
      .then(() => {
        console.log("Dane zostały zapisane pomyślnie.");
        navigation.navigate("Main"); // Przejdź na ekran główny po zapisaniu zgłoszenia
      })
      .catch((error) => {
        console.error("Błąd podczas zapisywania danych:", error);
      });
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('Main');}}>
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>
      <View>
        <View style={styles.miniLogo}>
          <Image source={{ uri: 'https://i.imgur.com/oXo43tf.png' }} />
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
          <Text style={styles.title}>{"Zgłoś Pożar"}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Co się pali?"
          value={coSiePali}
          onChangeText={(text) => setCoSiePali(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Czy któraś z osób jest ranna?"
          value={czyOsobaRanna}
          onChangeText={(text) => setCzyOsobaRanna(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Czy któraś z osób jest zagrożona?"
          value={czyOsobaZagrozona}
          onChangeText={(text) => setCzyOsobaZagrozona(text)}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.send} onPress={handleZglosClick}>
            <Text style={styles.sendText}>{"Zgłoś"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 15,
    marginTop: 35,
  },
  miniLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    padding: 15,
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#eba059',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10
  },
  send: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fa0000',
    width: '80%',
    height: 45,
    borderRadius: 15,
    elevation: 5,
  },
  sendText: {
    fontSize: 25,
    color: '#fff',
  },
});

export default Report_Screen;
