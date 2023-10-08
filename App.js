import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main_Screen from './screens/main';
import Map_Screen from './screens/map';
import Report_Screen from './screens/zgłaszanie';
import { initializeApp } from 'firebase/app';
import Deu_Screen from './screens/def';
import Call_Screen from './screens/call';
import First_Screen from './screens/first';
import Menu_Screen from './screens/menu';
import Login_Screen from './login/login_screen'
import Steps_Screen from './screens/poradnik';
const Stack = createNativeStackNavigator();

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

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main_Screen}/>
        <Stack.Screen name="Map" component={Map_Screen}/>
        <Stack.Screen name="Report" component={Report_Screen}/>
        <Stack.Screen name="Call" component={Call_Screen}/>
        <Stack.Screen name="Deu" component={Deu_Screen}/>
        <Stack.Screen name="First" component={First_Screen}/>
        <Stack.Screen name="Menu" component={Menu_Screen}/>
        <Stack.Screen name="Login" component={Login_Screen}/>
        <Stack.Screen name="Steps" component={Steps_Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
