
import { View, Text, TouchableOpacity, Alert, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { estilo } from '../assets/Estilo';
export default function ContaItem({contaId, nome,parcelas,valor,vencimento, onEditar, onDeletar}) {
 
  return (
    <View style={estilo.itemContainer}>
    <Text style={estilo.textoFlat}>{nome}</Text>
    <Text style={estilo.textoFlat}>{parcelas}</Text>
    <Text style={estilo.textoFlat}>{valor}</Text>
    <Text style={estilo.textoFlat}>{vencimento}</Text>
    <View style={estilo.iconsContainer}>
      <TouchableOpacity onPress={() => onEditar(contaId)}>
        <Icon name="edit" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeletar(contaId)}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);
  
}
