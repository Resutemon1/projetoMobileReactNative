import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import{estilo} from'../assets/Estilo'
import { useAuth } from '../context/useAuth'
import MostrarSalario from './MostrarSalario';
export default function Header() {
  const { user, setUser } = useAuth();
  return (
    <View style={estilo.header}>
         <Text style={estilo.subtitulo}>Bem vindo: </Text>
         <Text style = {estilo.subtitulo}>  {user?.email}    </Text>
         <MostrarSalario/>
    </View>
  );
}