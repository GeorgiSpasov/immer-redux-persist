import {
  FavoritesState,
  FavoritesActionTypes,
  favoritesTypes,
} from './favoritesTypes';

const initialState: FavoritesState = {
  favorites: [],
};

export function favoritesReducer(
  state = initialState,
  action: FavoritesActionTypes,
): FavoritesState {
  switch (action.type) {
    case favoritesTypes.ADD_FAVORITE: {
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    }
    case favoritesTypes.REMOVE_FAVORITE: {
      const filtered = state.favorites.filter(f => f.id !== action.payload);
      return {
        ...state,
        favorites: filtered,
      };
    }
    default:
      return state;
  }
}
