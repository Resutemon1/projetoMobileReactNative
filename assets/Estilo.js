import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    flex: 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
  },
  subtitulo: {
    marginTop: 11,
    marginBottom:2,
    fontSize: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  text: {
    color: '#fcf5fa',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  fecharTexto: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
  viewMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  layoutImage: {
    backgroundColor: '#1976D2',
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  imagem:{
    height: 75, width: 140, resizeMode: 'contain'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  legendaContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textoFlat: {
    fontSize: 14,
    flex:1
  },
  tituloFlat: {
    fontSize: 14,
    paddingLeft:15
  },
iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
});
