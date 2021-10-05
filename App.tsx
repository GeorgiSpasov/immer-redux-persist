import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'store/store';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from 'navigation/TabNavigation';
import {COLORS} from 'constants/globalStyles';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import Preview from 'components/Preview';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
            <Loader />
            <Notification />
            <Preview />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.accentColor,
  },
  container: {
    flex: 1,
  },
});

export default App;
