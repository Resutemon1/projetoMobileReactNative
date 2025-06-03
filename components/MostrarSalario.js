import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../FirebaseConfig';
export default function MostrarSalario() {
  const [salario, setSalario] = useState(null);
  useEffect(() => {
    const buscarSalario = async () => {
      try {
        const uid = auth.currentUser?.uid;
        const querySnapshot = await getDocs(collection(db, 'salario'));
        let salarioEncontrado = null;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.usuarioId === uid) {
            salarioEncontrado = data.valorBruto; // <-- campo correto
          }
        });
        setSalario(salarioEncontrado);
      } catch (error) {
        console.error('Erro ao buscar salário:', error);
      }
    };
    buscarSalario();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>
        Salário: {salario !== null ? `R$ ${Number(salario).toFixed(2)}` : 'Carregando...'}
      </Text>
    </View>
  );
}
