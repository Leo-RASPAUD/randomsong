import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'left',
          headerLeft: () => <HeaderLeft />, // eslint-disable-line
          headerRight: () => <HeaderRight />, // eslint-disable-line
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
