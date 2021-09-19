import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'navigation/routes';
import HomeScreen from 'screens/NewsScreen';
import FavoritesScreen from 'screens/FavoritesScreen';
import HistoryScreen from 'screens/HistoryScreen';
import TabBar from './TabBar';

const TabStack = createBottomTabNavigator();

const TabNavigation = () => (
  <TabStack.Navigator
    tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
    <TabStack.Screen
      name={ROUTES.NEWS}
      component={HomeScreen}
      options={{
        title: 'News',
        headerShown: false,
      }}
    />
    <TabStack.Screen
      name={ROUTES.FAVORITES}
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        headerShown: false,
      }}
    />
    <TabStack.Screen
      name={ROUTES.HISTORY}
      component={HistoryScreen}
      options={{
        title: 'History',
        headerShown: false,
      }}
    />
  </TabStack.Navigator>
);

export default TabNavigation;
