import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground,TouchableOpacity} from 'react-native';
import{estilo} from '../assets/Estilo'
import {auth} from '../FirebaseConfig'
import { getAuth } from 'firebase/auth';
import { useAuth } from '../context/useAuth'
import { TextInput } from 'react-native-web';
import { useState } from 'react';
import Header from '../components/Header';
export default function Menu({navigation}) {
  const { user, setUser } = useAuth();
  const{salario,setSalario} = useState();
  getAuth().onAuthStateChanged((user)=>{
    if(!user){
      navigation.reset({
        index: 0,
        routes:[{name:'tela-inicial'}]
      }

      )
    }
  })
  const handleLogout = async() =>{
    auth.signOut()
  };
  const handleModal = ()=>{

  };
  return (
    <SafeAreaView style={{flex: 1}}> 
  
    <Header/>
   
      <View style =  {estilo.layoutImage}>
     <TouchableOpacity onPress={()=>{handleModal()}}>
        
        <Image
        style ={{height:125,width:200,resizeMode:'contain',padding:5}}
        source = {{uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467'}}
        />
  
      <Text style = {{allignItens: 'center'}}>colocar salario</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{handleModal()}}>
        
        <Image
        style ={{height:125,width:200,resizeMode:'contain',padding:5}}
        source = {{uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467'}}
        />
  
      <Text style = {{allignItens: 'center'}}>adicionar conta a pagar</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>{handleModal()}}>
        
        <Image
        style ={{height:125,width:200,resizeMode:'contain',padding:5}}
        source = {{uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467'}}
        />
  
      <Text style = {{allignItens: 'center'}}>adicionar emprestimo</Text>
     </TouchableOpacity>
      <TouchableOpacity onPress={()=>{handleModal()}}>
        
        <Image
        style ={{height:125,width:200,resizeMode:'contain',padding:5}}
        source = {{uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467'}}
        />
  
      <Text style = {{allignItens: 'center'}}>adicionar investimento</Text>
     </TouchableOpacity>
     
      </View>
      <Button
          title="deslogar"
          
          onPress={() => {
            handleLogout()
          }}
        />
    </SafeAreaView>
  );
}