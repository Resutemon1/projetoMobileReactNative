import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../FirebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InvestimentoItem from '../components/InvestimentoItem';
import ModalEditarInvestimento from '../components/ModalEditarInvestimento';
import { estilo } from '../assets/Estilo';
export default function Investimento() {
  const [investimentos, setInvestimentos] = useState([]);
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [investimentoSelecionado, setInvestimentoSelecionado] = useState(null);
  const carregarInvestimentos = useCallback(async () => {
  try {
    const uid = auth.currentUser?.uid;
    const querySnapshot = await getDocs(collection(db, 'investimento'));
    const dados = [];
    querySnapshot.forEach((currentDoc) => {
      const data = currentDoc.data();
      if (data.usuarioId === uid) {
        dados.push({ id: currentDoc.id, ...data });
      }
    });
    setInvestimentos(dados);
  } catch (error) {
    console.error('Erro ao carregar investimentos:', error);
  }
}, []);
  useFocusEffect(
    useCallback(() => {
      carregarInvestimentos();
    }, [carregarInvestimentos])
  );
  const handleDeletar = async (id) => {
    try {
      const ref = doc(db, 'investimento', id);
      await deleteDoc(ref);
      setInvestimentos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar investimento:', error);
    }
  };
  const handleEditar = (id) => {
    const itemSelecionado = investimentos.find(item => item.id === id);
    setInvestimentoSelecionado(itemSelecionado);
    setModalEditarVisible(true);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={estilo.legendaContainer}>
        <Text style={estilo.tituloFlat}>Tipo Investimento</Text>
        <Text style={estilo.tituloFlat}>Valor</Text>
      </View>
      <FlatList
        data={investimentos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <InvestimentoItem
            investimentoId={item.id}
            tipoInvest={item.tipoInvest}
            valor={item.valor}
            onEditar={handleEditar}
            onDeletar={handleDeletar}
          />
        )}
      />
      <ModalEditarInvestimento
        visible={modalEditarVisible}
        onClose={() => setModalEditarVisible(false)}
        item={investimentoSelecionado}
        onAtualizado={carregarInvestimentos}
      />
      <Footer />
    </SafeAreaView>
  );
}
