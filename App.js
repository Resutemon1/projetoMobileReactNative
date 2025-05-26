
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNav from './navigation/BottomTabNav'
import Inicial from './screens/Inicial';
import Persona from './screens/Persona'
import Warframe from './screens/Warframe'
import Metaphor from './screens/Metaphor'
import Balatro from './screens/Balatro'
import { estilo } from './assets/Estilo';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      >
        <Stack.Screen
         name="tela-inicial"
          component={Inicial} />
        <Stack.Screen
         name="menu" 
         component={BottomTabNav} />
         <Stack.Screen
         name="persona" 
         component={Persona} />
         <Stack.Screen
         name="warframe" 
         component={Warframe} />
         <Stack.Screen
         name="balatro" 
         component={Balatro} />
         <Stack.Screen
         name="metaphor" 
         component={Metaphor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
