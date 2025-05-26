import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
export default function Menu({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}> 
  

     

        
      
      <Button
          title="deslogar"
          
          onPress={() => navigation.replace('tela-inicial')}
        />
    </SafeAreaView>
  );
}