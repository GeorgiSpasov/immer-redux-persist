import React from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Modal,
  SafeAreaView,
  Linking,
} from 'react-native';
import {COLORS} from 'constants/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/store';
import {NewsActions} from 'store/news/newsReducer';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import WebView from 'react-native-webview';

const Preview = () => {
  const dispatch = useDispatch();
  const selectedStory = useSelector(
    (state: RootState) => state.news.selectedStory,
  );

  const clearStory = () => {
    dispatch(NewsActions.deselectStory());
  };

  const openInBrowser = async () => {
    await Linking.openURL(selectedStory?.url as string);
  };

  return (
    <Modal
      style={styles.container}
      animationType="slide"
      transparent={true}
      visible={!!selectedStory}
      onRequestClose={clearStory}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.placeHolder} onPress={clearStory} />
        <View style={styles.separator}>
          <MaterialIcon
            name="open-in-browser"
            style={styles.menuIcon}
            onPress={openInBrowser}
          />
          <AntDesignIcon
            name="closesquareo"
            style={styles.menuIcon}
            onPress={clearStory}
          />
        </View>
        <View style={styles.modalContent}>
          <WebView source={{uri: selectedStory?.url as string}} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeHolder: {
    flex: 1,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width / 56,
    backgroundColor: COLORS.accentColor,
  },
  menuIcon: {
    fontSize: width / 20,
  },
  modalContent: {
    flex: 1,
  },
  modalText: {
    fontSize: width / 3,
  },
});

export default Preview;
