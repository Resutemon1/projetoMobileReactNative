
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from '../screens/Menu'
import Gastos from'../screens/Gastos';
import Investimento from '../screens/Investimento';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Emprestimo from '../screens/Emprestimo'
export default function BottomTabNav() {

  const BottomTab = createBottomTabNavigator();
  return (
     <BottomTab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'menu') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'gastos') {
        iconName = focused ? 'cash' : 'cash-outline';
      } else if (route.name === 'investimento') {
        iconName = focused ? 'trending-up' : 'trending-up-outline';
      } else if (route.name === 'emprestimo') {
        iconName = focused ? 'document-text' : 'document-text-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  })}
>
        <BottomTab.Screen
         name="menu"
          component={Menu} />
        <BottomTab.Screen
         name="gastos" 
         component={Gastos} />
         <BottomTab.Screen
         name="investimento" 
         component={Investimento} />
         <BottomTab.Screen
         name="emprestimo"
          component={Emprestimo} />
         
      </BottomTab.Navigator>

  );
}
