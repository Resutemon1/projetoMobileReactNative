import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { estilo } from '../assets/Estilo';
export default function ModalEditarConta({ visible, onClose, item, onAtualizado }) {
  const [campos, setCampos] = useState({
    nome: '',
    valor: '',
    parcelas: '',
    vencimento: '',
  });
  useEffect(() => {
    if (item) {
      setCampos({
        nome: item.nome || '',
        valor: String(item.valor || ''),
        parcelas: String(item.parcelas || ''),
        vencimento: item.vencimento || '',
      });
    }
  }, [item, visible]);
  const atualizar = (field, value) => {
    setCampos(prev => ({ ...prev, [field]: value }));
  };
  const handleSalvar = async () => {
    try {
      const ref = doc(db, 'conta', item.id);
      await updateDoc(ref, {
        nome: campos.nome,
        valor: parseFloat(campos.valor),
        parcelas: parseInt(campos.parcelas),
        vencimento: campos.vencimento,
      });
      onAtualizado();
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      alert('Erro ao atualizar conta.');
    }
  };
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={estilo.modalOverlay}>
        <View style={estilo.modalContainer}>
          <Text style={estilo.modalTitle}>Editar Conta</Text>
          <TextInput
            style={estilo.input}
            placeholder="Nome"
            placeholderTextColor="black"
            value={campos.nome}
            onChangeText={(text) => atualizar('nome', text)}
          />
          <TextInput
            style={estilo.input}
            placeholder="Valor"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={campos.valor}
            onChangeText={(text) => atualizar('valor', text)}
          />
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
            placeholder="Vencimento"
            placeholderTextColor="black"
            value={campos.vencimento}
            onChangeText={(text) => atualizar('vencimento', text)}
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