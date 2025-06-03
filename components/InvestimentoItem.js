import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { estilo } from '../assets/Estilo';
export default function InvestimentoItem({ investimentoId, tipoInvest, valor, onEditar, onDeletar }) {
  return (
    <View style={estilo.itemContainer}>
      <Text style={estilo.textoFlat}>{tipoInvest}</Text>
      <Text style={estilo.textoFlat}>{valor}</Text>
      <View style={estilo.iconsContainer}>
        <TouchableOpacity onPress={() => onEditar(investimentoId)}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeletar(investimentoId)}>
          <Icon name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
