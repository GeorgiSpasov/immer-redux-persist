import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

class Reducer extends ImmerReducer<LoaderState> {
  clearState() {
    this.draftState = {...initialState};
  }
  showLoader() {
    this.draftState.isLoading = true;
  }
  hideLoader() {
    this.draftState.isLoading = false;
  }
}

const LoaderActions = createActionCreators(Reducer);
const loaderReducer = createReducerFunction(Reducer, initialState);

export {loaderReducer, LoaderActions};
