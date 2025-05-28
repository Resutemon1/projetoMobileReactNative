import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import{estilo} from'../assets/Estilo'
import { useAuth } from '../context/useAuth'

export default function Header() {
  const { user, setUser } = useAuth();
  return (
    <View style={estilo.header}>
         <Text style={estilo.subtitulo}>Bem vindo {user?.email}</Text>
    </View>
  );
}