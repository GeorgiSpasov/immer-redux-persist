import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';
import NOTIFICATION from 'constants/notification';

interface NotificationState {
  isOpen: boolean;
  message: string;
  notificationType: NOTIFICATION | undefined;
}

const initialState: NotificationState = {
  isOpen: false,
  message: '',
  notificationType: undefined,
};

class Reducer extends ImmerReducer<NotificationState> {
  clearState() {
    this.draftState = {...initialState};
  }
  triggerNotification(notification: Partial<NotificationState>) {
    this.draftState.isOpen = true;
    this.draftState.notificationType = notification.notificationType;
    this.draftState.message = notification.message as string;
  }
  clearNotification() {
    this.draftState = {...initialState};
  }
}

const NotificationActions = createActionCreators(Reducer);
const notificationReducer = createReducerFunction(Reducer, initialState);

export {notificationReducer, NotificationActions};
