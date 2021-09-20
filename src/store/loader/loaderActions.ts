import {Dispatch} from 'redux';
import {loaderTypes, LoaderActionTypes} from './loaderTypes';

export function showLoaderAction(): LoaderActionTypes {
  return {
    type: loaderTypes.LOADER_SHOW_SUCCESS,
    payload: true,
  };
}
export function hideLoaderAction(): LoaderActionTypes {
  return {
    type: loaderTypes.LOADER_HIDE_SUCCESS,
    payload: false,
  };
}

export const showLoader = () => (dispatch: Dispatch<LoaderActionTypes>) => {
  dispatch(showLoaderAction());
};

export const hideLoader = () => (dispatch: Dispatch<LoaderActionTypes>) => {
  dispatch(hideLoaderAction());
};
