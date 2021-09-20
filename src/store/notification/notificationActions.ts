import {Dispatch} from 'redux';
import {
  notificationTypes,
  NotificationActionTypes,
  NotificationState,
} from './notificationTypes';

export function triggerNotificationAction(
  notification: Partial<NotificationState>,
): NotificationActionTypes {
  return {
    type: notificationTypes.NOTIFICATION_TRIGGER,
    payload: {
      isOpen: true,
      ...notification,
    },
  };
}

export function clearNotificationAction(): NotificationActionTypes {
  return {
    type: notificationTypes.NOTIFICATION_CLEAR,
  };
}

export const triggerNotification = (
  notification: Partial<NotificationState>,
) => (dispatch: Dispatch<NotificationActionTypes>) => {
  dispatch(triggerNotificationAction(notification));
};

export const clearNotification = () => (
  dispatch: Dispatch<NotificationActionTypes>,
) => {
  dispatch(clearNotificationAction());
};
