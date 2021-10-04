import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NOTIFICATION from 'constants/notification';
import {RootState} from 'store/store';
import {NotificationActions} from 'store/notification/notificationReducer';
import {COLORS} from 'constants/globalStyles';

const Notification = () => {
  const dispatch = useDispatch();
  const {isOpen, message, notificationType} = useSelector(
    (store: RootState) => store.notification,
  );
  const isError = notificationType === NOTIFICATION.ERROR;

  return (
    <Modal transparent visible={isOpen}>
      <View style={styles.modalContentContainer}>
        <View style={styles.blurLayer} />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>
            {isError ? 'An error has occurred!' : message}
          </Text>
          {isError && (
            <Text style={styles.errorText}>
              {message
                ? message
                : 'Something unexpected happened, try to reload to fix it'}
            </Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(NotificationActions.clearNotification())}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
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
  contentContainer: {
    width: width / 1.2,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  titleText: {
    marginVertical: width / 24,
    fontSize: width / 18,
    textAlign: 'center',
    color: COLORS.primaryTextColor,
  },
  errorText: {
    fontSize: width / 24,
    textAlign: 'center',
    color: COLORS.primaryTextColor,
  },
  button: {
    marginVertical: width / 12,
    height: width / 10,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 6,
    backgroundColor: COLORS.primaryTextColor,
  },
  buttonText: {
    fontSize: width / 28,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default Notification;
