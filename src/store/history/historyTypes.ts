import {Story} from 'models/Story';

export enum historyTypes {
  ADD_TO_HISTORY = 'ADD_TO_HISTORY',
}

export interface HistoryState {
  history: Story[];
}

interface AddToHistoryAction {
  type: typeof historyTypes.ADD_TO_HISTORY;
  payload: Story;
}

export type HistoryActionTypes = AddToHistoryAction;
