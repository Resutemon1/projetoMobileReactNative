import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../FirebaseConfig';
export default function MostrarSalario() {
  const [salarios, setSalarios] = useState([]);
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
  useFocusEffect(
    useCallback(() => {
      carregarSalarios();
    }, [carregarSalarios])
  );
  const salarioBruto = salarios.length > 0 ? salarios[0].valorBruto : null;
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>
        Salário: {salarioBruto !== null ? `R$ ${Number(salarioBruto).toFixed(2)}` : 'Carregando...'}
      </Text>
    </View>
  );
}
