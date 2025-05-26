
import { Text, StyleSheet, SafeAreaView, Pressable, ImageBackground, Alert ,TextInput,View,Button} from 'react-native';
import { estilo } from '../assets/Estilo';
import{useState} from 'react'
export default function Inicial({ navigation }) {
  const [nome,setNome] = useState(0)
  const [senha,setSenha] = useState(0)
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={estilo.formulario}>
      <TextInput
      style={estilo.input}
      placeholder = 'nome'
      value = {nome}
      keyboardType="default"
      onChangeText ={(e)=>setNome(e)}
      />
     
      <TextInput
      style={estilo.input}
      placeholder = 'senha'
      value = {senha}
      secureTextEntry = {true}
      keyboardType="number-pad"
      onChangeText ={(e)=>setSenha(e)}
         
      />
     <Button
          title="logar"
          
          onPress={() => {
            if(nome==="caio"&& senha==="123"){
              navigation.replace('menu')
            }
            else{
              Alert.alert("login errado")
            }
          }}
        />

      
    </View>
    </SafeAreaView>
  );
}
