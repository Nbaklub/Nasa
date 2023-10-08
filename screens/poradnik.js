import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import {MaterialIcons} from "react-native-vector-icons"
import YouTube from "react-native-youtube";
const Steps_Screen = ({navigation}) => {
    const handleNavigate = () => {
        // Przykład nawigacji do innej ścieżki za pomocą navigation.navigate
        navigation.navigate('Main');
      };
    return(
        <ScrollView>
            <View style={{paddingTop:50}}>
                <TouchableOpacity onPress={handleNavigate}>
                    <MaterialIcons name="close" size={50} color="black" />
                </TouchableOpacity>
                
                <View style={{alignItems: "center", width: '96%', marginLeft: '2%'}}>
                        <Text style={{textAlign: 'center',fontWeight: 'bold', fontSize: 40, color: 'orange', marginBottom: 20 }}>Jak zgłosić pożar?</Text>
                        <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>1. Wróć do strony głównej </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 15}}>2. Naciśnij przycisk zgłoś zagrożenie.</Text>
                        <Image style={{resizeMode: 'stretch', marginTop: 20}} source={require('../assets/poradnik1.png')}/>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 15}}>3. Jeśli masz taką możliwość odpowiedz na zadane pytania(nie jest to obowiązkowe ale będzie istotne dla służb ratunkowych)</Text>
                        <Image style={{resizeMode: 'stretch', marginTop: 20}} source={require('../assets/poradnik2.png')}/>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 15}}>4. Naciśnij przycisk zgłoś</Text>
                        <Image style={{resizeMode: 'stretch', marginTop: 20}} source={require('../assets/poradnik3.png')}/>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 15}}>5. Gotowe, służby dostały Twoje zgłoszenie</Text>
                        <View style={{height: 50}}>
                        
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
            
    );
}
export default Steps_Screen;