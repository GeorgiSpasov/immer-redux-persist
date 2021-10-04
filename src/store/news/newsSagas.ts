import {all, call, put, takeEvery} from 'redux-saga/effects';
import storyService from 'services/storyService';
import {NewsActions} from './newsReducer';
import {LoaderActions} from 'store/loader/loaderReducer';
import {NotificationActions} from 'store/notification/notificationReducer';
import NOTIFICATION from 'constants/notification';

export default function* watcherSaga() {
  yield all([takeEvery(NewsActions.loadTopStories.type, loadTopStories)]);
  yield all([takeEvery(NewsActions.loadNews.type, loadNews)]);
}

function* loadTopStories(): any {
  try {
    yield put(LoaderActions.showLoader());
    const topStories = yield call(storyService.fetchTopStoryIds);
    yield put(NewsActions.setTopStories(topStories));
  } catch (error: any) {
    yield put(
      NotificationActions.triggerNotification({
        message: error.message,
        notificationType: NOTIFICATION.ERROR,
      }),
    );
  } finally {
    yield put(LoaderActions.hideLoader());
  }
}

function* loadNews(action: any): any {
  try {
    yield put(LoaderActions.showLoader());
    const news = yield call(storyService.fetchStoryData, action.payload);
    yield put(NewsActions.addNews(news));
  } catch (error: any) {
    yield put(
      NotificationActions.triggerNotification({
        message: error.message,
        notificationType: NOTIFICATION.ERROR,
      }),
    );
  } finally {
    yield put(LoaderActions.hideLoader());
  }
}
