import { Text, View, StyleSheet,SafeAreaView, Image,Button,Pressable ,ImageBackground} from 'react-native';
import{estilo} from '../assets/Estilo'
import {auth} from '../FirebaseConfig'
import { getAuth } from 'firebase/auth';
import { useAuth } from '../context/useAuth'
export default function Menu({navigation}) {
  const { user, setUser } = useAuth();
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
  return (
    <SafeAreaView style={{flex: 1}}> 
  

     <Text style={estilo.subtitulo}>Usuario: {user?.email}</Text>

        
      
      <Button
          title="deslogar"
          
          onPress={() => {
            handleLogout()
          }}
        />
    </SafeAreaView>
  );
}