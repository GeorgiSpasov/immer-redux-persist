import {Story} from 'models/Story';

export enum newsTypes {
  LOAD_TOP_STORIES = 'LOAD_TOP_STORIES',
  SET_TOP_STORIES = 'SET_TOP_STORIES',
  LOAD_NEWS = 'LOAD_NEWS',
  ADD_NEWS = 'ADD_NEWS',
  SELECT_STORY = 'SELECT_STORY',
  DESELECT_STORY = 'DESELECT_STORY',
}

export interface NewsState {
  topStories: string[];
  news: Story[];
  selectedStory: Story | null;
}

interface LoadTopStoriesAction {
  type: typeof newsTypes.LOAD_TOP_STORIES;
}

interface SetTopStoriesAction {
  type: typeof newsTypes.SET_TOP_STORIES;
  payload: string[];
}

interface LoadNewsAction {
  type: typeof newsTypes.LOAD_NEWS;
  payload: string[];
}

interface AddNewsAction {
  type: typeof newsTypes.ADD_NEWS;
  payload: Story[];
}

interface SelectStoryAction {
  type: typeof newsTypes.SELECT_STORY;
  payload: Story;
}

interface DeselectStoryAction {
  type: typeof newsTypes.DESELECT_STORY;
}

export type NewsActionTypes =
  | LoadTopStoriesAction
  | SetTopStoriesAction
  | LoadNewsAction
  | AddNewsAction
  | SelectStoryAction
  | DeselectStoryAction;
