import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { estilo } from '../assets/Estilo';
export default function EmprestimoItem({ emprestimoId, parcelas, valor, onEditar, onDeletar }) {
  return (
    <View style={estilo.itemContainer}>
      <Text style={estilo.textoFlat}>{parcelas}</Text>
      <Text style={estilo.textoFlat}>{valor}</Text>
      <View style={estilo.iconsContainer}>
        <TouchableOpacity onPress={() => onEditar(emprestimoId)}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeletar(emprestimoId)}>
          <Icon name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
