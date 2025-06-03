import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { estilo } from '../assets/Estilo';
export default function ModalEditarInvestimento({ visible, onClose, item, onAtualizado }) {
  const [campos, setCampos] = useState({
    tipoInvest: '',
    valor: '',
  });
  useEffect(() => {
    if (item) {
      setCampos({
        tipoInvest: item.tipoInvest || '',
        valor: String(item.valor || ''),
      });
    }
  }, [item, visible]);
  const atualizar = (field, value) => {
    setCampos(prev => ({ ...prev, [field]: value }));
  };
  const handleSalvar = async () => {
    try {
      const ref = doc(db, 'investimento', item.id);
      await updateDoc(ref, {
        tipoInvest: campos.tipoInvest,
        valor: parseFloat(campos.valor),
      });
      onAtualizado();
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar investimento:', error);
      alert('Erro ao atualizar investimento.');
    }
  };
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={estilo.modalOverlay}>
        <View style={estilo.modalContainer}>
          <Text style={estilo.modalTitle}>Editar Investimento</Text>
          <TextInput
            style={estilo.input}
            placeholder="Tipo Investimento"
            placeholderTextColor="black"
            value={campos.tipoInvest}
            onChangeText={text => atualizar('tipoInvest', text)}
          />
          <TextInput
            style={estilo.input}
            placeholder="Valor"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={campos.valor}
            onChangeText={text => atualizar('valor', text)}
          />
          <TouchableOpacity onPress={handleSalvar}>
            <Text style={{ textAlign: 'center', marginTop: 10, color: 'green' }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={estilo.fecharTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
