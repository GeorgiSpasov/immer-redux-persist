import {Story} from 'models/Story';
import {NewsActionTypes, newsTypes} from './newsTypes';

export function loadTopStoriesAction(): NewsActionTypes {
  return {
    type: newsTypes.LOAD_TOP_STORIES,
  };
}

export function setTopStoriesAction(stories: string[]): NewsActionTypes {
  return {
    type: newsTypes.SET_TOP_STORIES,
    payload: stories,
  };
}

export function loadNewsAction(stories: string[]): NewsActionTypes {
  return {
    type: newsTypes.LOAD_NEWS,
    payload: stories,
  };
}

export function addNewsAction(news: Story[]): NewsActionTypes {
  return {
    type: newsTypes.ADD_NEWS,
    payload: news,
  };
}

export function selectStoryAction(story: Story): NewsActionTypes {
  return {
    type: newsTypes.SELECT_STORY,
    payload: story,
  };
}

export function deselectStoryAction(): NewsActionTypes {
  return {
    type: newsTypes.DESELECT_STORY,
  };
}
