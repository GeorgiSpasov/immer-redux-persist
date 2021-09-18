import {Story} from 'models/Story';
import {FavoritesActionTypes, favoritesTypes} from './favoritesTypes';

export function addFavoriteAction(story: Story): FavoritesActionTypes {
  return {
    type: favoritesTypes.ADD_FAVORITE,
    payload: story,
  };
}

export function removeFavoriteAction(storyId: string): FavoritesActionTypes {
  return {
    type: favoritesTypes.REMOVE_FAVORITE,
    payload: storyId,
  };
}
