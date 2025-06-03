import React, { useEffect, useState ,useCallback } from 'react';
import { SafeAreaView, View, Text, SectionList,FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../FirebaseConfig';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContaItem from '../components/ContaItem';
import { estilo } from '../assets/Estilo';
export default function Gastos({ navigation }) {
  const [salarios, setSalarios] = useState([]);
  const [contas, setContas] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);
  const [investimentos, setInvestimentos] = useState([]);
useFocusEffect(
  useCallback(() => {
    carregarSalarios();
    carregarContas();
    carregarEmprestimos();
    carregarInvestimentos();
  }, [carregarSalarios, carregarContas, carregarEmprestimos, carregarInvestimentos])
);
 const carregarSalarios = useCallback(async () => {
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
}, []);

const carregarContas = useCallback(async () => {
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
}, []);
const carregarEmprestimos = useCallback(async () => {
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
}, []);
const carregarInvestimentos = useCallback(async () => {
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
}, []);
 const handleDeletar = async (id) => {
    await firestore().collection('dicas_pets').doc(id).delete();
  };
const handleEditar = (id) => {
    
    
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
    <View style={estilo.legendaContainer}>
    <Text style={estilo.tituloFlat}>nome</Text>
    <Text style={estilo.tituloFlat}>parcelas</Text>
    <Text style={estilo.tituloFlat}>valor</Text>
    <Text style={estilo.tituloFlat}>vencimento</Text>
    </View>
      <FlatList
      data={contas}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ContaItem
          contasId={item.id}
          nome={item.nome}
          parcelas={item.parcelas}
          valor = {item.valor}
          vencimento = {item.vencimento}
          onEditar={handleEditar}
          onDeletar={handleDeletar}
        />
      )}
    />
      <Footer />
    </SafeAreaView>
  );
}

