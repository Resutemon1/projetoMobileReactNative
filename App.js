
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNav from './navigation/BottomTabNav'
import Inicial from './screens/Inicial';
import { AuthProvider } from './context/AuthProvider'
import { estilo } from './assets/Estilo';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
     <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator 
      
      >
        <Stack.Screen
         name="tela-inicial"
         o
         component={Inicial} />
        <Stack.Screen
         name="menu" 
         component={BottomTabNav} />
         
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
