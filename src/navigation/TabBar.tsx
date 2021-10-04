import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ROUTES} from './routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'constants/globalStyles';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const getIcon = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case ROUTES.NEWS:
        return (
          <Ionicons
            name="logo-hackernews"
            size={24}
            color={isFocused ? COLORS.light : COLORS.dark}
          />
        );
      case ROUTES.FAVORITES:
        return (
          <MaterialIcons
            name="star"
            size={24}
            color={isFocused ? COLORS.light : COLORS.dark}
          />
        );
      case ROUTES.HISTORY:
        return (
          <MaterialIcons
            name="history"
            size={24}
            color={isFocused ? COLORS.light : COLORS.dark}
          />
        );
      case ROUTES.SETTINGS:
        return (
          <MaterialIcons
            name="settings"
            size={24}
            color={isFocused ? COLORS.light : COLORS.dark}
          />
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            {getIcon(route.name, isFocused)}
            <Text style={isFocused ? styles.tabLabelFocused : styles.tabLabel}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.accentColor,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 14,
  },
  tabLabel: {
    color: COLORS.dark,
  },
  tabLabelFocused: {
    color: COLORS.light,
  },
});

export default TabBar;
