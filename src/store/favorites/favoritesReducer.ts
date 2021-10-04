import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';
import {Story} from 'models/Story';

interface FavoritesState {
  favorites: Story[];
}

const initialState: FavoritesState = {
  favorites: [],
};

class Reducer extends ImmerReducer<FavoritesState> {
  clearState() {
    this.draftState = {...initialState};
  }
  addFavorite(story: Story) {
    this.draftState.favorites.unshift(story);
  }
  removeFavorite(storyId: string) {
    this.draftState.favorites = this.draftState.favorites.filter(
      story => story.id !== storyId,
    );
  }
}

const FavoritesActions = createActionCreators(Reducer);
const favoritesReducer = createReducerFunction(Reducer, initialState);

export {favoritesReducer, FavoritesActions};
