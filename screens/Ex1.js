import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable,ScrollView,Alert } from 'react-native';
import{estilo} from '../assets/Estilo'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Ex1({navigation}) {

  return (
    
     <SafeAreaView style={{flex: 1}} >
      
      <Header/>

      <View style = {estilo.main}> 
        <Text > exercicio 1 </Text>
         <ScrollView style={estilo.scrollview}>
      <Pressable onPress={()=>{navigation.navigate('persona')}}>
        <Image
        style ={{height:125,width:200,resizeMode:'contain'}}
        source = {{uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467'}}
        />
      </Pressable>

      <Pressable onPress={()=>{navigation.navigate('warframe')}}>
        <Image
        style ={{height:125,width:200,resizeMode:'contain'}}
        source = {{uri: 'https://www-static.warframe.com/images/landing/warframe-metacard.png'}}
        />
      </Pressable>

      <Pressable onPress={()=>{navigation.navigate('balatro')}}>
        <Image
        style ={{height:125,width:200,resizeMode:'contain'}}
        source = {{uri: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000072051/a7baf09e1da434bae373120750e39cb7d134c116ca8a4b81bc07666ecab9b326'}}
        />
      </Pressable>
      
      <Pressable onPress={()=>{navigation.navigate('metaphor')}}>
        <Image
        style ={{height:125,width:200,resizeMode:'contain'}}
        source = {{uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2406/cd88404e1345d47052f2db2551dd1e61c8c1e1eae9f9812a.jpg'}}
        />
      </Pressable>
     
    </ScrollView>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}