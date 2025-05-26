
import { Text, SafeAreaView, StyleSheet , View} from 'react-native';

export const estilo = StyleSheet.create({
  header:{
      flex: 0.1,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems: 'center'
  },
  footer:{
    flex: 0.1, backgroundColor: 'yellow',justifyContent:'center',alignItems: 'center'
  },
  main:{
     flex: 0.8,justifyContent:'center',alignItems: 'center'
  },
  titulo:{
    fontSize:40
      },
  scrollview:
  {
        
        
  },
  pressable:{
      justifyContent:'center',alignItems: 'center'
  },
  subtitulo:{
      fontSize:20
  },
  formulario:{
       justifyContent:'center',
       alignItems: 'center',
       fontSize:40,
  },
  image:{
      flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text:{
      color: '#fcf5fa',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
});