import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes, { RoutesParamsList } from './routes';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const DrawerNav = createDrawerNavigator<RoutesParamsList>();

const Drawer: React.FC = () => {
  return (
    <DrawerNav.Navigator initialRouteName={Routes.HOME}>
      <DrawerNav.Screen name={Routes.HOME} component={HomeStack} />
      <DrawerNav.Screen name={Routes.PROFILE} component={ProfileStack} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
