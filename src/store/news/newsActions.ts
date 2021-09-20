import {Dispatch} from 'redux';
import {Story} from 'models/Story';
import NOTIFICATION from 'constants/notification';
import {NotificationActionTypes} from 'store/notification/notificationTypes';
import {triggerNotificationAction} from 'store/notification/notificationActions';
import {LoaderActionTypes} from 'store/loader/loaderTypes';
import {showLoaderAction, hideLoaderAction} from 'store/loader/loaderActions';
import storyService from 'services/storyService';
import {NewsActionTypes, newsTypes} from './newsTypes';

function setTopStoriesAction(stories: string[]): NewsActionTypes {
  return {
    type: newsTypes.SET_TOP_STORIES,
    payload: stories,
  };
}

function addNewsAction(news: Story[]): NewsActionTypes {
  return {
    type: newsTypes.ADD_NEWS,
    payload: news,
  };
}

function selectStoryAction(story: Story): NewsActionTypes {
  return {
    type: newsTypes.SELECT_STORY,
    payload: story,
  };
}

function deselectStoryAction(): NewsActionTypes {
  return {
    type: newsTypes.DESELECT_STORY,
  };
}

export const loadTopStories =
  () =>
  async (
    dispatch: Dispatch<
      NewsActionTypes | LoaderActionTypes | NotificationActionTypes
    >,
  ) => {
    try {
      dispatch(showLoaderAction());
      const topStories = await storyService.fetchTopStoryIds();
      dispatch(setTopStoriesAction(topStories));
    } catch (err: any) {
      dispatch(
        triggerNotificationAction({
          message: err.message,
          notificationType: NOTIFICATION.ERROR,
        }),
      );
    } finally {
      dispatch(hideLoaderAction());
    }
  };

export const loadNews =
  (storyIds: string[]) =>
  async (
    dispatch: Dispatch<
      NewsActionTypes | LoaderActionTypes | NotificationActionTypes
    >,
  ) => {
    try {
      dispatch(showLoaderAction());
      const news = await storyService.fetchStoryData(storyIds);
      dispatch(addNewsAction(news));
    } catch (err: any) {
      dispatch(
        triggerNotificationAction({
          message: err.message,
          notificationType: NOTIFICATION.ERROR,
        }),
      );
    } finally {
      dispatch(hideLoaderAction());
    }
  };

export const selectStory =
  (story: Story) => (dispatch: Dispatch<NewsActionTypes>) => {
    dispatch(selectStoryAction(story));
  };

export const deselectStory = () => (dispatch: Dispatch<NewsActionTypes>) => {
  dispatch(deselectStoryAction());
};
