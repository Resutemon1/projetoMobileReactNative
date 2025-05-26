import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Balatro({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}> 
  
      <Header/>
       <View style = {estilo.main}> 
        <Text>
         Balatro é um roguelike onde você joga pôquer com cartas modificadas em uma mecânica viciante e estratégica. O objetivo é criar mãos de pôquer, mas com cartas especiais que alteram regras, multiplicam pontos e criam combos insanos. O jogo mistura sorte e planejamento com uma estética retrô e rápida rejogabilidade. Muito elogiado por sua originalidade e profundidade escondida.
        </Text>

       </View>
       <Footer/>
          </SafeAreaView>
  );
}