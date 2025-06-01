import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { estilo } from '../assets/Estilo';


export default function ModalCadastro({ visible, onClose, tipo }) {
  const renderInputs = () => {
    switch (tipo) {
      case 'salario':
        return (
          <>
            <TextInput placeholder="Valor do salário" 
            placeholderTextColor="black"
            style={estilo.input} />
            <TextInput placeholder="Data de recebimento"
            placeholderTextColor="black"
            style={estilo.input} />
          </>
        );
      case 'conta':
        return (
          <>
            <TextInput placeholder="Nome da conta"
            placeholderTextColor="black"
             style={estilo.input} />
            <TextInput placeholder="Valor"
            placeholderTextColor="black"
             style={estilo.input} />
            <TextInput placeholder="Data de vencimento"
            placeholderTextColor="black"
             style={estilo.input} />
          </>
        );
      case 'emprestimo':
        return (
          <>
            <TextInput placeholder="Valor do empréstimo"
            placeholderTextColor="black"
             style={estilo.input} />
            <TextInput placeholder="Parcelas"
            placeholderTextColor="black"
             style={estilo.input} />
          </>
        );
      case 'investimento':
        return (
          <>
            <TextInput placeholder="Tipo de investimento"
            placeholderTextColor="black"
             style={estilo.input} />
            <TextInput placeholder="Valor investido"
            placeholderTextColor="black"
             style={estilo.input} />
          </>
        );
      default:
        return <Text>Nenhum tipo selecionado</Text>;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={estilo.modalOverlay}>
        <View style={estilo.modalContainer}>
          <Text style={estilo.modalTitle}>
            {tipo ? `Cadastro de ${tipo}` : 'Cadastro'}
          </Text>
          {renderInputs()}
          <TouchableOpacity onPress={onClose}>
            <Text style={estilo.fecharTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}