import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Warframe({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}> 
  
      <Header/>
       <View style = {estilo.main}> 
        <Text>
          Warframe é um jogo de tiro em terceira pessoa com forte foco em cooperação online. Você controla os "Tenno", guerreiros antigos que usam exoarmaduras chamadas Warframes, cada uma com habilidades únicas. O gameplay é rápido, fluido e focado em combate contra facções alienígenas, missões variadas e progressão de equipamentos. É conhecido por sua profundidade, atualização constante e lore complexa.
        </Text>

       </View>
       <Footer/>


        
      
  
    </SafeAreaView>
  );
}