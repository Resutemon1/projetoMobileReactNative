import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, SectionList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../FirebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { estilo } from '../assets/Estilo';
export default function Gastos({ navigation }) {
  const [salarios, setSalarios] = useState([]);
  const [contas, setContas] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);
  const [investimentos, setInvestimentos] = useState([]);
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
      querySnapshot.forEach(doc => {
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
      querySnapshot.forEach(doc => {
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
      querySnapshot.forEach(doc => {
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
      querySnapshot.forEach(doc => {
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
  const sections = [
    { title: 'Salários', data: salarios },
    { title: 'Contas', data: contas },
    { title: 'Empréstimos', data: emprestimos },
    { title: 'Investimentos', data: investimentos },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Text style={estilo.titulo}>{section.title}</Text>
        )}
        renderItem={({ item, section }) => {
          if (section.title === 'Salários') {
            return (
              <View>
                <Text>Valor bruto: {item.valorBruto}</Text>
              </View>
            );
          }
          if (section.title === 'Contas') {
            return (
              <View>
                <Text>Nome: {item.nome}</Text>
                <Text>Valor: {item.valor}</Text>
                <Text>Vencimento: {item.vencimento}</Text>
                <Text>Parcelas: {item.parcelas}</Text>
              </View>
            );
          }
          if (section.title === 'Empréstimos') {
            return (
              <View>
                <Text>Valor: {item.valor}</Text>
                <Text>Parcelas: {item.parcelas}</Text>
              </View>
            );
          }
          if (section.title === 'Investimentos') {
            return (
              <View>
                <Text>Valor: {item.valor}</Text>
                <Text>Parcelas: {item.parcelas}</Text>
              </View>
            );
          }
          return null;
        }}
      />
      <Footer />
    </SafeAreaView>
  );
}
