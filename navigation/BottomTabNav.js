
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from '../screens/Menu'
import Ex1 from '../screens/Ex1';
export default function BottomTabNav() {

  const BottomTab = createBottomTabNavigator();
  return (
 
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'menu') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'ex1') {
              iconName = focused ? 'list' : 'list-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
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
         name="ex1" 
         component={Ex1} />
      </BottomTab.Navigator>

  );
}
