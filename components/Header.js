import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import{estilo} from'../assets/Estilo'
export default function Header() {
  return (
    <View style={estilo.header}>
      <Text style = {{color: 'white'}}>  Boas Vindas </Text>
    </View>
  );
}