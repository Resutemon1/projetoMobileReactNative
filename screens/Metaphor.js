import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Metaphor({navigation}) {
  
  return (
    <SafeAreaView style={{flex: 1}}> 
  
      <Header/>
       <View style = {estilo.main}> 
        <Text>
         Desenvolvido pela equipe de Persona 3, 4 e 5, Metaphor: ReFantazio é um novo RPG com ambientação de fantasia medieval, diferente da moderna de Persona. O jogo promete um sistema de combate híbrido (tempo real e por turnos), temas de transformação pessoal e sociedade, e um estilo visual estilizado e cinematográfico. Ainda não lançado, mas muito aguardado.


        </Text>

       </View>
       <Footer/>
          </SafeAreaView>
  );
}