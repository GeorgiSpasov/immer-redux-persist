import {History} from 'models/History';

export enum historyTypes {
  ADD_TO_HISTORY = 'ADD_TO_HISTORY',
}

export interface HistoryState {
  history: History[];
}

interface AddToHistoryAction {
  type: typeof historyTypes.ADD_TO_HISTORY;
  payload: History;
}

export type HistoryActionTypes = AddToHistoryAction;
