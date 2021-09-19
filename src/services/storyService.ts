import requester from 'utils/requester';
import {Story} from 'models/Story';
import {User} from 'models/User';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const fetchTopStoryIds = async (): Promise<string[]> => {
  const url = `${BASE_URL}/topstories.json`;
  const storyIds = await requester.get(url);
  return storyIds as string[];
};

const fetchStoryItem = async (
  storyId: string,
): Promise<Omit<Story, 'user'>> => {
  const url = `${BASE_URL}/item/${storyId}.json`;
  const storyItem = await requester.get(url);
  const mappedItem: Omit<Story, 'user'> = {
    id: storyItem.id,
    title: storyItem.title,
    url: storyItem.url,
    timestamp: storyItem.time * 1000,
    score: storyItem.score,
    authorId: storyItem.by,
  };
  return mappedItem;
};

const fetchUser = async (userId: string): Promise<User> => {
  const url = `${BASE_URL}/user/${userId}.json`;
  const user = await requester.get(url);
  return user;
};

const fetchStoryData = async (storyIds: string[]): Promise<Story[]> => {
  if (!storyIds || storyIds.length === 0) {
    return [];
  }
  const storyPromises = storyIds.map(id => fetchStoryItem(id));
  const stories = await Promise.all(storyPromises);
  const userPromises = stories.map(story => fetchUser(story.authorId));
  const users = await Promise.all(userPromises);
  stories.forEach((story, i) => Object.assign(story, {user: users[i]}));
  stories.sort((a, b) => b.score - a.score);
  return stories as Story[];
};

const storyService = {
  fetchTopStoryIds,
  fetchStoryData,
  fetchStoryItem,
  fetchUser,
};

export default storyService;
