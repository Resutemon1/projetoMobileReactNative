import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { estilo } from '../assets/Estilo';
import { db, auth } from '../FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export default function ModalCadastro({ visible, onClose, tipo }) {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [campo3, setCampo3] = useState('');
  const [campo4, setCampo4] = useState('');
  const resetarCampos = () => {
    setCampo1('');
    setCampo2('');
    setCampo3('');
    setCampo4('');
  };
  const salvarDados = async () => {
    let dados = {};
    const uid = auth.currentUser?.uid;
    switch (tipo) {
      case 'salario':
        dados = {
          valorBruto: parseFloat(campo1),
          data: campo2,
          descontos: parseFloat(campo3) || 0,
          usuarioId: uid,
          criadoEm: new Date(),
        };
        break;
      case 'conta':
        dados = {
          nome: campo1,
          valor: parseFloat(campo2),
          vencimento: campo3,
          parcelas: campo4,
          usuarioId: uid,
          criadoEm: new Date(),
        };
        break;
      case 'emprestimo':
        dados = {
          valor: parseFloat(campo1),
          parcelas: campo2,
          usuarioId: uid,
          criadoEm: new Date(),
        };
        break;
      case 'investimento':
        dados = {
          tipoInvest: campo1,
          valor: parseFloat(campo2),
          usuarioId: uid,
          criadoEm: new Date(),
        };
        break;
      default:
        return;
    }

    try {
      await addDoc(collection(db, tipo), dados);
      alert(`${tipo} cadastrado com sucesso!`);
      resetarCampos();
      onClose();
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar no banco.');
    }
  };
  const renderInputs = () => {
    switch (tipo) {
      case 'salario':
        return (
          <>
            <TextInput
              placeholder="Valor do salário"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo1}
              onChangeText={setCampo1}
            />
            <TextInput
              placeholder="Data de recebimento"
              placeholderTextColor="black"
              style={estilo.input}
              value={campo2}
              onChangeText={setCampo2}
            />
            <TextInput
              placeholder="Descontos (opcional)"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo3}
              onChangeText={setCampo3}
            />
          </>
        );
      case 'conta':
        return (
          <>
            <TextInput
              placeholder="Nome da conta"
              placeholderTextColor="black"
              style={estilo.input}
              value={campo1}
              onChangeText={setCampo1}
            />
            <TextInput
              placeholder="Valor"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo2}
              onChangeText={setCampo2}
            />
            <TextInput
              placeholder="Data de vencimento"
              placeholderTextColor="black"
              style={estilo.input}
              value={campo3}
              onChangeText={setCampo3}
            />
            <TextInput
              placeholder="Parcelas"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo4}
              onChangeText={setCampo4}
            />
          </>
        );
      case 'emprestimo':
        return (
          <>
            <TextInput
              placeholder="Valor do empréstimo"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo1}
              onChangeText={setCampo1}
            />
            <TextInput
              placeholder="Parcelas"
              placeholderTextColor="black"
              style={estilo.input}
              value={campo2}
              onChangeText={setCampo2}
            />
          </>
        );
      case 'investimento':
        return (
          <>
            <TextInput
              placeholder="Tipo de investimento"
              placeholderTextColor="black"
              style={estilo.input}
              value={campo1}
              onChangeText={setCampo1}
            />
            <TextInput
              placeholder="Valor investido"
              placeholderTextColor="black"
              style={estilo.input}
              keyboardType="numeric"
              value={campo2}
              onChangeText={setCampo2}
            />
          </>
        );
      default:
        return <Text>Nenhum tipo selecionado</Text>;
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={estilo.modalOverlay}>
        <View style={estilo.modalContainer}>
          <Text style={estilo.modalTitle}>
            {tipo ? `Cadastro de ${tipo}` : 'Cadastro'}
          </Text>
          {renderInputs()}
          <TouchableOpacity onPress={salvarDados}>
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
