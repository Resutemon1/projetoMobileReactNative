import { Text, View, StyleSheet, SafeAreaView, Image, Button, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { estilo } from '../assets/Estilo'
import {collection,getDocs,setDocs,doc} from 'firebase/firestore'
import {db} from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { getAuth } from 'firebase/auth';
import { useAuth } from '../context/useAuth'
import { useState,useEffect } from 'react';
import Header from '../components/Header';
import ModalCadastro from '../components/ModalCadastro'
export default function Menu({ navigation }) {
const { user, setUser } = useAuth();
const [data, setData] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [tipoSelecionado, setTipoSelecionado] = useState(null);
const [salarios, setSalarios] = useState([]);
const [contas, setContas] = useState([]);
const [emprestimos, setEmprestimos] = useState([]);
const [investimentos, setInvestimentos] = useState([]);
useEffect(() => {
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
useEffect(() => {
  carregarSalarios();
  carregarContas();
  carregarEmprestimos();
  carregarInvestimentos();
}, []);
const carregarSalarios = async () => {
  try {
    const uid = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, 'salario'));
    const dados = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.usuarioId === uid) {
        dados.push({ id: doc.id, ...data });
      }
    });
    setSalarios(dados);
  } catch (error) {
    console.error('Erro ao carregar salários:', error);
  }
};
const carregarContas = async () => {
  try {
    const uid = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, 'conta'));
    const dados = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.usuarioId === uid) {
        dados.push({ id: doc.id, ...data });
      }
    });
    setContas(dados);
  } catch (error) {
    console.error('Erro ao carregar contas:', error);
  }
};
const carregarEmprestimos = async () => {
  try {
    const uid = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, 'emprestimo'));
    const dados = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.usuarioId === uid) {
        dados.push({ id: doc.id, ...data });
      }
    });
    setEmprestimos(dados);
  } catch (error) {
    console.error('Erro ao carregar empréstimos:', error);
  }
};

const carregarInvestimentos = async () => {
  try {
    const uid = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, 'investimento'));
    const dados = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.usuarioId === uid) {
        dados.push({ id: doc.id, ...data });
      }
    });
    setInvestimentos(dados);
  } catch (error) {
    console.error('Erro ao carregar investimentos:', error);
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