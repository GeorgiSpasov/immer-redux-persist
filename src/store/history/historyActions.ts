import {Story} from 'models/Story';
import {HistoryActionTypes, historyTypes} from './historyTypes';

export function addToHistoryAction(story: Story): HistoryActionTypes {
  return {
    type: historyTypes.ADD_TO_HISTORY,
    payload: story,
  };
}
