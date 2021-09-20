import {
  NotificationState,
  NotificationActionTypes,
  notificationTypes,
} from './notificationTypes';

const initialState: NotificationState = {
  isOpen: false,
  message: '',
  notificationType: undefined,
};

export function notificationReducer(
  state = initialState,
  action: NotificationActionTypes,
): NotificationState {
  switch (action.type) {
    case notificationTypes.NOTIFICATION_TRIGGER: {
      return {
        isOpen: true,
        message: action.payload.message as string,
        notificationType: action.payload.notificationType,
      };
    }
    case notificationTypes.NOTIFICATION_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
}
