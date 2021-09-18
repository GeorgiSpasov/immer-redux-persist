import {combineReducers} from 'redux';
import {loaderReducer} from './loader/loaderReducer';
import {notificationReducer} from './notification/notificationReducer';
import {newsReducer} from './news/newsReducer';
import {favoritesReducer} from './favorites/favoritesReducer';
import {historyReducer} from './history/historyReducer';
import {settingsReducer} from './settings/settingsReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  notification: notificationReducer,
  news: newsReducer,
  favorites: favoritesReducer,
  history: historyReducer,
  settings: settingsReducer,
});

export default rootReducer;
