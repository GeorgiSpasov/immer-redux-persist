import StoryItem from 'components/StoryItem';
import {Story} from 'models/Story';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadNews, loadTopStories} from 'store/news/newsActions';
import {RootState} from 'store/store';

const PAGE_SIZE = 10;

const NewsScreen = () => {
  const dispatch = useDispatch();
  const storyIds = useSelector((state: RootState) => state.news.topStories);
  const stories = useSelector((state: RootState) => state.news.news);
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState(0);

  const fetchMore = async () => {
    const nextStoryIds = storyIds.slice(
      page * PAGE_SIZE,
      (page + 1) * PAGE_SIZE,
    );
    dispatch(loadNews(nextStoryIds));
    setPage(page + 1);
  };

  const renderStoryItem = ({item, index}: {item: Story; index: number}) => {
    return <StoryItem item={item} index={index} />;
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderStoryItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContainer, backgroundStyle]}
        onEndReachedThreshold={0.9}
        onEndReached={async () => await fetchMore()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
