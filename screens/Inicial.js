
import { Text, StyleSheet, SafeAreaView, Pressable, ImageBackground, Alert ,TextInput,View,Button} from 'react-native';
import { estilo } from '../assets/Estilo';
import{useState} from 'react'
import {auth} from '../FirebaseConfig'
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
export default function Inicial({ navigation }) {
  const [nome,setNome] = useState('');
  const [senha,setSenha] = useState('');
  const handleLogin = async ()=>{
    if(!nome.includes('@')||senha.length< 6){
      Alert.alert('login invalido');
      alert('login invalido');
    }
    else{
      try{
        const user = await signInWithEmailAndPassword(auth,nome,senha)
        if(user){
          navigation.replace('menu');
        }
       
      }catch(error){
        console.log(error)
        alert('erro ao realizar o login: '+ error.message);
      }
    }
  }
   const handleCreate = async ()=>{
    if(!nome.includes('@')||senha.length< 6){
      Alert.alert('login invalido');
      alert('login invalido');
    }
    else{
      try{
        const user = await createUserWithEmailAndPassword(auth,nome,senha)
        if(user){
          navigation.replace('menu');
        }
       
      }catch(error){
        console.log(error)
        alert('erro ao realizar o login: '+ error.message);
      }
    }
  }

  
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={estilo.formulario}>
      <TextInput
      style={estilo.input}
      placeholder = 'email'
      value = {nome}
      keyboardType="default"
      onChangeText ={(e)=>setNome(e)}
      />
     
      <TextInput
      style={estilo.input}
      placeholder = 'senha'
      value = {senha}
      secureTextEntry = {true}
      keyboardType="number-pad"
      onChangeText ={(e)=>setSenha(e)}
         
      />
     <Button
          title="logar"
          
          onPress={() => {
            handleLogin()
          }}
        />

      
    </View>
    </SafeAreaView>
  );
}
