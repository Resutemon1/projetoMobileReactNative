import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { estilo } from '../assets/Estilo';

export default function ModalEditarEmprestimo({ visible, onClose, item, onAtualizado }) {
  const [campos, setCampos] = useState({
    parcelas: '',
    valor: '',
  });

  useEffect(() => {
    if (item) {
      setCampos({
        parcelas: String(item.parcelas || ''),
        valor: String(item.valor || ''),
      });
    }
  }, [item, visible]);

  const atualizar = (field, value) => {
    setCampos(prev => ({ ...prev, [field]: value }));
  };

  const handleSalvar = async () => {
    try {
      const ref = doc(db, 'emprestimo', item.id);
      await updateDoc(ref, {
        parcelas: campos.parcelas,
        valor: campos.valor,
      });
      onAtualizado();
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      alert('Erro ao atualizar empréstimo.');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={estilo.modalOverlay}>
        <View style={estilo.modalContainer}>
          <Text style={estilo.modalTitle}>Editar Empréstimo</Text>
          <TextInput
            style={estilo.input}
            placeholder="Parcelas"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={campos.parcelas}
            onChangeText={(text) => atualizar('parcelas', text)}
          />
          <TextInput
            style={estilo.input}
            placeholder="Valor"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={campos.valor}
            onChangeText={(text) => atualizar('valor', text)}
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
