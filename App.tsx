import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from 'navigation/TabNavigation';
import colors from 'constants/globalStyles';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.accentColor,
  },
  container: {
    flex: 1,
  },
});

export default App;
