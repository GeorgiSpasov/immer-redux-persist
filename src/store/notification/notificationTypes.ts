import NOTIFICATION from '../../constants/notification';

export enum notificationTypes {
  NOTIFICATION_TRIGGER = 'NOTIFICATION_TRIGGER',
  NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR',
}

export interface NotificationState {
  isOpen: boolean;
  message: string;
  notificationType: NOTIFICATION | undefined;
}

interface TriggerNotificationAction {
  type: typeof notificationTypes.NOTIFICATION_TRIGGER;
  payload: Partial<NotificationState>;
}

interface ClearNotificationAction {
  type: typeof notificationTypes.NOTIFICATION_CLEAR;
}

export type NotificationActionTypes =
  | TriggerNotificationAction
  | ClearNotificationAction;
