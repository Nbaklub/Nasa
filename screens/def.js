import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import {MaterialIcons} from "react-native-vector-icons"
const Deu_Screen = ({navigation}) => {
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
                    <Text style={{fontWeight: 'bold', fontSize: 40, color: 'orange' }}>Zalecane działania podczas zagrożenia</Text>
                    
                        <Text style={{paddingTop: 20}}>1. W przypadku powstania pożaru wszyscy zobowiązani są podjąć działania w celu jego likwidacji:
                        </Text>
                        <Text>- zaalarmować niezwłocznie, przy użyciu wszystkich dostępnych środków osoby będące w strefie zagrożenia,</Text>
                        <Text>- wezwać straż pożarną.</Text>
                        
                    <Text style={{paddingTop: 20}}>2. Przystąpić niezwłocznie, przy użyciu miejscowych środków gaśniczych do gaszenia pożaru i nieść pomoc osobom zagrożonym w przypadku koniecznym przystąpić do ewakuacji ludzi i mienia. Należy czynności te wykonać w taki sposób aby nie doszło do powstania paniki jaka może ogarnąć ludzi będących w zagrożeniu, które wywołuje u ludzi ogień i dym. Panika może być przyczyną niepotrzebnych i tragicznych w skutkach wypadków w trakcie prowadzenia działań ratowniczo gaśniczych. Dlatego prowadząc jakiekolwiek działania w przypadku powstania pożar należy kierować się rozwagą w podejmowaniu decyzji. Do czasu przybycia straży pożarnej kierowanie akcją obejmuje kierownik zakładu pracy /właściciel obiektu/ lub osoba najbardziej energiczna i opanowana. Jak ewakuować ludzi i mienie
                        Celem ewakuacji ludzi jest zapewnienie osobom szybkiego i bezpiecznego opuszczenia strefy zagrożonej lub objętej pożarem. Do celów ewakuacji ludzi służą korytarze - poziome drogi ewakuacji i klatki schodowe - pionowe drogi ewakuacyjne z których istnieje możliwość bezpośredniego wyjścia na zewnątrz. Drogi i wyjścia ewakuacyjne oznakowane muszą być pożarniczymi tablicami informacyjnymi zgodnie z PN - 92/N - 01256/02 "Znaki Bezpieczeństwa - Ewakuacja. Ewakuacją ludzi z części lub z całego obiektu zarządza kierujący akcją ratowniczo - gaśniczą. W przypadku zaistnienia pożaru lub innego zagrożenia budynku lub jego części, osoby nie biorące udziału w akcji ratowniczej powinny opuścić strefę zagrożenia. Osoby opuszczające strefę zagrożenia kierują się do najbliższego wyjścia służącego celom ewakuacji zgodnie z oznakowaniem.
                    </Text>
                    <Text style={{paddingTop: 10}}>W czasie prowadzenia ewakuacji zabronione jest:</Text>
                    <Text>- dokonywanie jakichkolwiek czynności mogących wywołać panikę,</Text>
                    <Text>- przechodzenie w kierunku przeciwnym do kierunku ewakuacji,</Text>
                    <Text>- zatrzymywanie się lub tamowanie ruchu w inny sposób.</Text>
                    <Text style={{paddingTop: 10}}>Osoby ewakuowane muszą podporządkować się poleceniom ratowników to jest osobom prowadzącym ewakuację: strażacy, pracownikom służby zabezpieczenia obiektu. Poza ewakuacją ludzi niejednokrotnie zachodzi konieczność ewakuacji mienia. Celem ewakuacji mienia jest zabezpieczenie cennych przedmiotów oraz ważnych dokumentów przed zniszczeniem lub uszkodzeniem w przypadku pożaru lub innego zagrożenia. Ewakuowane przedmioty i dokumenty należy umieszczać aby nie były narażone na zniszczenie lub uszkodzenie. Działania ewakuacyjne muszą być prowadzone w sposób skoordynowany, nie powodujący utrudnień w innych działaniach. Kierujący działaniami powinien wstępnie określić pomieszczenia z których należy wynieść mienie.</Text>
                    <Text style={{paddingTop: 10}}>Do pomieszczeń, z których należy ewakuować mienie w pierwszej kolejności, jeśli istnieje taka możliwość bez narażenia życia i zdrowia zalicza się:</Text>
                    <Text>- pomieszczenia bezpośrednio zagrożone pożarem, w których jest ˇródło ognia,</Text>
                    <Text>- pomieszczenia sąsiednie ( w pionie i w poziomie) - możliwość rozprzestrzeniania się pożaru lub uszkodzenia przez działanie wysokiej temperatury i gazów popożarowych (dymu),</Text>
                    <Text>- pomieszczenia pod palącym się pomieszczeniem narażone na możliwość zalania w czasie akcji gaśniczej.</Text>
                    <View style={{height: 50}}>

                    </View>
                </View>
            </View>
        </ScrollView>
            
    );
}
export default Deu_Screen;