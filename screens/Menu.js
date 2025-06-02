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
import ModalCadastro from '../components/ModalCadastro'
export default function Menu({ navigation }) {
const { user, setUser } = useAuth();
const [data,setData] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const [tipoSelecionado, setTipoSelecionado] = useState(null);
useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'tela-inicial' }],
        });
      }
    });

    return () => unsubscribe(); // limpa o listener ao sair da tela
  }, []);
const abrirModal = (tipo) => {
  setTipoSelecionado(tipo);
  setModalVisible(true);
};

  const handleLogout = async () => {
    auth.signOut()
    navigation.reset({
      index: 0,
      routes:[{name:'tela-inicial'}]
    })
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
          data: doc.data(),
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
      <ModalCadastro
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
         tipo={tipoSelecionado}
      />
      <View style={estilo.viewMenu}>
        <TouchableOpacity 
        style = {
          estilo.layoutImage}onPress={() => abrirModal('salario')}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text >salario</Text>
        </TouchableOpacity>
        <TouchableOpacity   style = {
          estilo.layoutImage} onPress={() => abrirModal('conta')}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text>conta</Text>
        </TouchableOpacity>

        <TouchableOpacity  style = {
          estilo.layoutImage} onPress={() => abrirModal('emprestimo')}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text> emprestimo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {
          estilo.layoutImage}onPress={() => abrirModal('investimento')}>

          <Image
            style={estilo.imagem}
            source={{ uri: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/capsule_616x353.jpg?t=1733297467' }}
          />

          <Text>investimento</Text>
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