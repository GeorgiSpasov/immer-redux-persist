import {Dispatch} from 'redux';
import {Story} from 'models/Story';
import {NotificationActionTypes} from 'store/notification/notificationTypes';
import {LoaderActionTypes} from 'store/loader/loaderTypes';
import {HistoryActionTypes, historyTypes} from './historyTypes';

function addToHistoryAction(story: Story): HistoryActionTypes {
  return {
    type: historyTypes.ADD_TO_HISTORY,
    payload: story,
  };
}

export const addToHistory =
  (story: Story) =>
  (
    dispatch: Dispatch<
      HistoryActionTypes | LoaderActionTypes | NotificationActionTypes
    >,
  ) => {
    const historyEntry: Story = {
      dateRead: Date.now(),
      ...story,
    };
    dispatch(addToHistoryAction(historyEntry));
  };
