import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';
import {Story} from 'models/Story';

interface NewsState {
  topStories: string[];
  news: Story[];
  selectedStory: Story | null;
}

const initialState: NewsState = {
  topStories: [],
  news: [],
  selectedStory: null,
};

class Reducer extends ImmerReducer<NewsState> {
  clearState() {
    this.draftState = {...initialState};
  }
  loadTopStories() {}
  setTopStories(storyIds: string[]) {
    this.draftState.topStories = storyIds;
  }
  loadNews(_: string[]) {}
  addNews(news: Story[]) {
    this.draftState.news.push(...news);
  }
  selectStory(story: Story) {
    this.draftState.selectedStory = story;
  }
  deselectStory() {
    this.draftState.selectedStory = null;
  }
}

const NewsActions = createActionCreators(Reducer);
const newsReducer = createReducerFunction(Reducer, initialState);

export {newsReducer, NewsActions};
