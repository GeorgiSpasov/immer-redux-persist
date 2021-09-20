import {HistoryState, HistoryActionTypes, historyTypes} from './historyTypes';

const initialState: HistoryState = {
  history: [],
};

export function historyReducer(
  state = initialState,
  action: HistoryActionTypes,
): HistoryState {
  switch (action.type) {
    case historyTypes.ADD_TO_HISTORY: {
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    }
    default:
      return state;
  }
}
