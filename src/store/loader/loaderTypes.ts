export enum loaderTypes {
  LOADER_SHOW_SUCCESS = 'LOADER_SHOW_SUCCESS',
  LOADER_HIDE_SUCCESS = 'LOADER_HIDE_SUCCESS',
}

export interface LoaderState {
  isLoading: boolean;
}

interface ShowLoaderAction {
  type: typeof loaderTypes.LOADER_SHOW_SUCCESS;
  payload: boolean;
}

interface HideLoaderAction {
  type: typeof loaderTypes.LOADER_HIDE_SUCCESS;
  payload: boolean;
}

export type LoaderActionTypes = ShowLoaderAction | HideLoaderAction;
