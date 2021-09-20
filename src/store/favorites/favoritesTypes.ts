import {Story} from 'models/Story';

export enum favoritesTypes {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export interface FavoritesState {
  favorites: Story[];
}

interface AddFavoriteAction {
  type: typeof favoritesTypes.ADD_FAVORITE;
  payload: Story;
}

interface RemoveFavoriteAction {
  type: typeof favoritesTypes.REMOVE_FAVORITE;
  payload: string;
}

export type FavoritesActionTypes = AddFavoriteAction | RemoveFavoriteAction;
