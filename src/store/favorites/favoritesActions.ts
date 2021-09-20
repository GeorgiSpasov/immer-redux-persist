import {Dispatch} from 'redux';
import {Story} from 'models/Story';
import {NotificationActionTypes} from 'store/notification/notificationTypes';
import {LoaderActionTypes} from 'store/loader/loaderTypes';
import {FavoritesActionTypes, favoritesTypes} from './favoritesTypes';

function addFavoriteAction(story: Story): FavoritesActionTypes {
  return {
    type: favoritesTypes.ADD_FAVORITE,
    payload: story,
  };
}

function removeFavoriteAction(storyId: string): FavoritesActionTypes {
  return {
    type: favoritesTypes.REMOVE_FAVORITE,
    payload: storyId,
  };
}

export const addFavorite =
  (story: Story) =>
  (
    dispatch: Dispatch<
      FavoritesActionTypes | LoaderActionTypes | NotificationActionTypes
    >,
  ) => {
    dispatch(addFavoriteAction(story));
  };

export const removeFavorite =
  (storyId: string) =>
  (
    dispatch: Dispatch<
      FavoritesActionTypes | LoaderActionTypes | NotificationActionTypes
    >,
  ) => {
    dispatch(removeFavoriteAction(storyId));
  };
