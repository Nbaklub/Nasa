import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import {MaterialIcons} from "react-native-vector-icons"
import YouTube from "react-native-youtube";
const First_Screen = ({navigation}) => {
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
                    <Text style={{fontWeight: 'bold', fontSize: 40, color: 'orange' }}>Udzielanie pierwszej pomocy</Text>
                        <View style={{alignItems: 'flex-start'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Czym jest pierwsza pomoc przedmedyczna?</Text>
                        <Text style={{paddingTop: 5}}>Pierwsza pomoc przedmedyczna to ogół czynności skierowanych celem ratowania życia do poszkodowanego w stanie zagrożenia zdrowia do czasu przybycia wykwalifikowanych służb medycznych. Czynności te podejmowane są przez znajdujące się w miejscu zdarzenia osoby. Aby móc odpowiednio przeprowadzić pierwszą pomoc przedmedyczną, warto zawczasu zasięgnąć pomocy specjalistów, którzy zaznajomią nas z zasadami wykonywania podstawowych zabiegów resuscytacyjnych (z ang. basic life support, BLS). Dobrą formą przekazania takich informacji są e-wizyty. </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17, paddingTop: 20}}>Czy istnieje obowiązek udzielania pierwszej pomocy?</Text>
                        <Text style={{paddingTop: 5}}>Według obowiązujących w Polsce regulacji prawnych w przypadku bycia świadkiem sytuacji zagrażającej zdrowiu lub życiu drugiej osoby istnieje obowiązek niezwłocznego podjęcia czynności ratunkowych. Nieudzielenie pomocy bez narażenia na niebezpieczeństwo utraty życia albo ciężkiego uszczerbku na zdrowiu siebie czy innych osób wiąże się z karą pozbawienia wolności do lat 3.</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17, paddingTop: 20}}>Pierwsza pomoc – główne zasady</Text>
                        <Text style={{paddingTop: 5}}>Główna zasada pierwszej pomocy brzmi: „nie szkodzić”. Osoba pomagająca powinna zadbać o bezpieczeństwo zarówno swoje, jak i poszkodowanego oraz chronić osoby znajdujące się w pobliżu. W związku z tym początkowe czynności, jakie należy podjąć, to dokładna ocena sytuacji i wyeliminowanie zagrożeń. Bardzo ważną rolę odgrywa zabezpieczenie miejsca udzielania pierwszej pomocy i stosowanie środków ochrony osobistej typu maseczka do sztucznego oddychania czy jednorazowe rękawiczki.</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17, paddingTop: 20}}>Pierwsza pomoc krok po kroku</Text>
                        <Text style={{paddingTop: 5}}>Charakter podejmowanych działań będzie się różnił w zależności od potrzeb poszkodowanego. Oto jak wygląda w punktach udzielanie pierwszej pomocy:</Text>
                        <Text>1. Upewnij się, czy świadkowie zdarzenia są bezpieczni.</Text>
                        <Text>2. Oceń reakcję poszkodowanego – potrząśnij delikatnie za ramiona i zapytaj: „Co się stało? Czy wszystko w porządku?”,</Text>
                        <Text>3. W przypadku, gdy reaguje:</Text>
                        <Text style={{marginLeft: 20}}>• Oceń stan poszkodowanego i uzyskaj informacje co do jego dolegliwości,</Text>
                        <Text style={{marginLeft: 20}}>• Wezwij pomoc medyczną w razie potrzeby.</Text>
                        <Text>4. W przypadku, gdy nie reaguje:</Text>
                        <Text style={{marginLeft: 20}}>• udrożnij drogi oddechowe – połóż jedną rękę na czole poszkodowanego lekko odchylając ją do tyłu, drugą ręką wysuń żuchwę,</Text>
                        <Text style={{marginLeft: 20}}>• nachylając się nad poszkodowanym, poszukaj prawidłowego oddechu: wzrokiem → ruchy klatki piersiowej, dotykiem → ruch powietrza na swoim policzku, słuchem → szmery oddechowe; ocena ta powinna trwać około 10 s.</Text>
                        <Text>5. W przypadku prawidłowego oddechu:</Text>
                        <Text style={{marginLeft: 20}}>• ułóż poszkodowanego w bezpiecznej pozycji,</Text>
                        <Text style={{marginLeft: 20}}>• czekając na pomoc, regularnie oceniaj oddech.</Text>
                        <Text>Chwilę po zatrzymaniu krążenia mogą się pojawić pojedyncze, głośne westchnienia, których nie należy mylić z prawidłowym oddechem. Poprawny oddech zaczyna się od 2 wdechów na 10 s. </Text>
                        <Text>6. Jeśli chory nie oddycha, rozpocznij resuscytację krążeniowo-oddechową (RKO):</Text>
                        <Text style={{marginLeft: 20}}>• zapewnij sobie pomoc,</Text>
                        <Text style={{marginLeft: 20}}>• wezwij lub nakaż któremuś ze świadków wezwanie pomocy,</Text>
                        <Text style={{marginLeft: 20}}>• nakaż innej osobie udać się po tzw. AED czyli przenośny defibrylator, </Text>
                        <Text style={{marginLeft: 40}}>• uklęknij obok poszkodowanego,</Text>
                        <Text style={{marginLeft: 40}}>• spleć dłonie i ułóż je na ⅓ wysokości mostka,</Text>
                        <Text style={{marginLeft: 40}}>• wyprostowane ramiona powinny znajdować się prostopadle do klatki piersiowej poszkodowanego,</Text>
                        <Text style={{marginLeft: 40}}>• klatka piersiowa powinna być uciskana do głębokości 6 cm, z częstością 100/min, należy wykonać serię 30 uciśnięć,</Text>
                        <Text style={{marginLeft: 40}}>• następnie wykonuje się 2 oddechy ratownicze, jedną ręką zaciska się poszkodowanemu skrzydełka nosa, a drugą odwodzi brodę w dół; po wzięciu normalnego wdechu obejmuje się swoimi ustami usta poszkodowanego i przez 1 s wdmuchuje powietrze, potem wraca się do uciskania klatki piersiowej w sekwencji 30:2.</Text>
                        <Text>Resuscytacja krążeniowo-oddechowa powinna być prowadzona do momentu:</Text>
                        <Text style={{marginLeft: 20}}>• przybycia specjalnych służb,</Text>
                        <Text style={{marginLeft: 20}}>• powrotu prawidłowego oddechu,</Text>
                        <Text style={{marginLeft: 20}}>• odzyskania przez poszkodowanego przytomności,</Text>
                        <Text style={{marginLeft: 20}}>• utraty sił – organizm ulega wyczerpaniu.</Text>
                        <View style={{height: 50}}>

</View>
                    </View>
                </View>
            </View>
        </ScrollView>
            
    );
}
export default First_Screen;