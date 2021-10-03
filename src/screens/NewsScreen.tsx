import ScreenContainer from 'components/ScreenContainer';
import StoryItem from 'components/StoryItem';
import {Story} from 'models/Story';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadNews, loadTopStories} from 'store/news/newsActions';
import {RootState} from 'store/store';

const PAGE_SIZE = 10;

const NewsScreen = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );
  const storyIds = useSelector((state: RootState) => state.news.topStories);
  const stories = useSelector((state: RootState) => state.news.news);
  const [page, setPage] = useState(0);

  const fetchMore = async () => {
    const nextStoryIds = storyIds.slice(
      page * PAGE_SIZE,
      (page + 1) * PAGE_SIZE,
    );
    dispatch(loadNews(nextStoryIds));
    setPage(page + 1);
  };

  const renderStoryItem = ({item}: {item: Story}) => {
    return <StoryItem item={item} />;
  };

  useEffect(() => {
    dispatch(loadTopStories());
  }, [dispatch]);

  useEffect(() => {
    if (storyIds.length) {
      fetchMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIds.length]);

  return (
    <ScreenContainer>
      <FlatList
        data={stories}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderStoryItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor}, styles.scrollContainer]}
        onEndReachedThreshold={0.9}
        onEndReached={async () => await fetchMore()}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default NewsScreen;
