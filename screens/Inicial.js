
import { Text, StyleSheet, SafeAreaView, Pressable, ImageBackground,Modal,TouchableOpacity, Alert ,TextInput,View,Button} from 'react-native';
import { estilo } from '../assets/Estilo';
import{useEffect, useState} from 'react'
import {auth} from '../FirebaseConfig'
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
export default function Inicial({ navigation }) {
  const [nome,setNome] = useState('');
  const [senha,setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(()=>{
    const checkLogin =  onAuthStateChanged(auth,(user)=>{
      if(user){
        navigation.replace('menu')
      }
    });
    return checkLogin;
  },[])
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
          setModalVisible(false);
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
      keyboardType="email-address"
      onChangeText ={(e)=>setNome(e)}
      />
     
      <TextInput
      style={estilo.input}
      placeholder = 'senha'
      value = {senha}
      secureTextEntry = {true}
      keyboardType="default"
      onChangeText ={(e)=>setSenha(e)}
         
      />
     <Button
          title="logar"
          
          onPress={() => {
            handleLogin()
          }}
        />
         <Button title="Criar Conta" onPress={() => setModalVisible(true)} />
    
      
    </View>
    <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={estilo.modalOverlay}>
    <View style={estilo.modalContainer}>
      <Text style={estilo.modalTitle}>Criar Conta</Text>

      <TextInput
        placeholder="Email"
        style={estilo.input}
        value={nome}
        onChangeText={setNome}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        style={estilo.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleCreate} />

      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={estilo.fecharTexto}>Fechar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </SafeAreaView>
  );
}
