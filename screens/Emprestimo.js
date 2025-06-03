import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../FirebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmprestimoItem from '../components/EmprestimoItem';
import ModalEditarEmprestimo from '../components/ModalEditarEmprestimo';
import { estilo } from '../assets/Estilo';

export default function Emprestimo() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [emprestimoSelecionado, setEmprestimoSelecionado] = useState(null);

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

  useFocusEffect(
    useCallback(() => {
      carregarEmprestimos();
    }, [carregarEmprestimos])
  );

  const handleDeletar = async (id) => {
    try {
      const ref = doc(db, 'emprestimo', id);
      await deleteDoc(ref);
      setEmprestimos((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar empréstimo:', error);
    }
  };

  const handleEditar = (id) => {
    const itemSelecionado = emprestimos.find(item => item.id === id);
    setEmprestimoSelecionado(itemSelecionado);
    setModalEditarVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={estilo.legendaContainer}>
        <Text style={estilo.tituloFlat}>Parcelas</Text>
        <Text style={estilo.tituloFlat}>Valor</Text>
      </View>
      <FlatList
        data={emprestimos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EmprestimoItem
            emprestimoId={item.id}
            parcelas={item.parcelas}
            valor={item.valor}
            onEditar={handleEditar}
            onDeletar={handleDeletar}
          />
        )}
      />
      <ModalEditarEmprestimo
        visible={modalEditarVisible}
        onClose={() => setModalEditarVisible(false)}
        item={emprestimoSelecionado}
        onAtualizado={carregarEmprestimos}
      />
      <Footer />
    </SafeAreaView>
  );
}
