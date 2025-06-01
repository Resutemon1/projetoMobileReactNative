import { Text, View, StyleSheet, SafeAreaView, Image, Button, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { estilo } from '../assets/Estilo'
import {collection,getDocs,setDocs,doc} from 'firebase/firestore'
import {db} from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { getAuth } from 'firebase/auth';
import { useAuth } from '../context/useAuth'
import { TextInput } from 'react-native-web';
import { useState,useEffect } from 'react';
import Header from '../components/Header';
export default function Menu({ navigation }) {
  const { user, setUser } = useAuth();
 const [data,setData] = useState('');
  getAuth().onAuthStateChanged((user) => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'tela-inicial' }]
      }

      )
    }
  })
  const handleLogout = async () => {
    auth.signOut()
  };
  const handleModal = () => {

  };
  useEffect(()=>{
    carregarDados();
  },[]);
  const carregarDados = async ()=>{
    try{
      const querySnapshot = await getDocs(collection(db,'categorias'));
      const categorias = [];
      querySnapshot.forEach((doc)=>{
        categorias.push({
          categoria: doc.id,
          data: doc.data().data,
        });
      });
      setData(categorias);
    } catch (error){
      console.error('Erro ao carregar dados:',error)
    }
  };
  return (
    <SafeAreaView style={estilo.container}>
      <Header />

      <View style={estilo.viewMenu}>
        <TouchableOpacity 
        style = {
          estilo.layoutImage}onPress={() => { handleModal() }}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text >colocar salario</Text>
        </TouchableOpacity>
        <TouchableOpacity   style = {
          estilo.layoutImage} onPress={() => { handleModal() }}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text>adicionar conta a pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity  style = {
          estilo.layoutImage} onPress={() => { handleModal() }}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text>adicionar emprestimo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {
          estilo.layoutImage} onPress={() => { handleModal() }}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text>adicionar investimento</Text>
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