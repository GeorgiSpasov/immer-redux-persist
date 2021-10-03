import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';
import colors from 'constants/globalStyles';

const Loader = () => {
  const isLoading = useSelector((store: RootState) => store.loader.isLoading);

  return (
    <Modal transparent visible={isLoading}>
      <View style={styles.modalContentContainer}>
        <View style={styles.blurLayer} />
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default Loader;
