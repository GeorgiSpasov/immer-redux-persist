import {LoaderState, LoaderActionTypes, loaderTypes} from './loaderTypes';

const initialState: LoaderState = {
  isLoading: false,
};

export function loaderReducer(
  state = initialState,
  action: LoaderActionTypes,
): LoaderState {
  switch (action.type) {
    case loaderTypes.LOADER_SHOW_SUCCESS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case loaderTypes.LOADER_HIDE_SUCCESS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
}
