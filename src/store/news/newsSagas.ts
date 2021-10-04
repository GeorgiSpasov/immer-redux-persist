import {all, call, put, takeEvery} from 'redux-saga/effects';
import {newsTypes} from './newsTypes';
import {addNewsAction, setTopStoriesAction} from './newsActions';
import {hideLoaderAction, showLoaderAction} from 'store/loader/loaderActions';
import storyService from 'services/storyService';
import {triggerNotificationAction} from 'store/notification/notificationActions';
import NOTIFICATION from 'constants/notification';

export default function* watcherSaga() {
  yield all([takeEvery(newsTypes.LOAD_TOP_STORIES, loadTopStories)]);
  yield all([takeEvery(newsTypes.LOAD_NEWS, loadNews)]);
}

function* loadTopStories(): any {
  try {
    yield put(showLoaderAction());
    const topStories = yield call(storyService.fetchTopStoryIds);
    yield put(setTopStoriesAction(topStories));
  } catch (error: any) {
    yield put(
      triggerNotificationAction({
        message: error.message,
        notificationType: NOTIFICATION.ERROR,
      }),
    );
  } finally {
    yield put(hideLoaderAction());
  }
}

function* loadNews(action: any): any {
  try {
    yield put(showLoaderAction());
    const news = yield call(storyService.fetchStoryData, action.payload);
    yield put(addNewsAction(news));
  } catch (error: any) {
    yield put(
      triggerNotificationAction({
        message: error.message,
        notificationType: NOTIFICATION.ERROR,
      }),
    );
  } finally {
    yield put(hideLoaderAction());
  }
}
