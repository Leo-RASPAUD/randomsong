import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './routes';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

export type DrawerTypes = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
};

const DrawerNav = createDrawerNavigator<DrawerTypes>();

const Drawer: React.FC = () => {
  return (
    <DrawerNav.Navigator initialRouteName={Routes.HOME}>
      <DrawerNav.Screen name={Routes.HOME} component={HomeStack} />
      <DrawerNav.Screen name={Routes.PROFILE} component={ProfileStack} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
