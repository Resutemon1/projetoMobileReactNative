import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Persona({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}> 
  
      <Header/>
       <View style = {estilo.main}> 
        <Text>
          A série Persona, derivada de Shin Megami Tensei, combina batalhas por turnos com simulação da vida escolar. Os protagonistas são geralmente estudantes que enfrentam ameaças sobrenaturais, invocando entidades chamadas "Personas" (representações do inconsciente). A trama mistura temas psicológicos, mitologia e escolhas morais, com destaque para o desenvolvimento de laços sociais que influenciam o combate.
        </Text>

       </View>
       <Footer/>


        
      
  
    </SafeAreaView>
  );
}