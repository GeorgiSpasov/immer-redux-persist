import {NewsState, NewsActionTypes, newsTypes} from './newsTypes';

const initialState: NewsState = {
  topStories: [],
  news: [],
  selectedStory: null,
};

export function newsReducer(
  state = initialState,
  action: NewsActionTypes,
): NewsState {
  switch (action.type) {
    case newsTypes.SET_TOP_STORIES: {
      return {
        ...state,
        topStories: action.payload,
      };
    }
    case newsTypes.ADD_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload],
      };
    }
    case newsTypes.SELECT_STORY: {
      return {
        ...state,
        selectedStory: action.payload,
      };
    }
    case newsTypes.DESELECT_STORY: {
      return {
        ...state,
        selectedStory: null,
      };
    }
    default:
      return state;
  }
}
