import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';
import {Story} from 'models/Story';

interface HistoryState {
  history: Story[];
}

const initialState: HistoryState = {
  history: [],
};
class Reducer extends ImmerReducer<HistoryState> {
  clearState() {
    this.draftState = {...initialState};
  }
  addToHistory(story: Story) {
    this.draftState.history.unshift(story);
  }
}

const HistoryActions = createActionCreators(Reducer);
const historyReducer = createReducerFunction(Reducer, initialState);

export {historyReducer, HistoryActions};
