import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {RootState} from 'store/store';
import colors from 'constants/globalStyles';

const Loader = () => {
  const isLoading = useSelector((store: RootState) => store.loader.isLoading);

  return (
    <Modal transparent visible={isLoading}>
      <View style={styles.modalContentContainer}>
        <BlurView
          style={styles.blurLayer}
          blurType="light"
          blurAmount={12}
          reducedTransparencyFallbackColor="white"
        />
        <ActivityIndicator size="large" color={colors.accentColor} />
      </View>
    </Modal>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurLayer: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: width,
  },
});

export default Loader;
