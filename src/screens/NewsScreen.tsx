import StoryItem from 'components/StoryItem';
import {Story} from 'models/Story';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';
import storyService from 'services/storyService';

const PAGE_SIZE = 10;

const NewsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [storyIds, setStoryIds] = useState<string[]>([]);
  const [stories, setStories] = useState<Story[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const fetchMore = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const nextStoryIds = storyIds.slice(
      page * PAGE_SIZE,
      (page + 1) * PAGE_SIZE,
    );
    const newStories = await storyService.fetchStoryData(nextStoryIds);
    setStories(oldStories => [...oldStories, ...newStories]);
    setPage(page + 1);
    setIsLoading(false);
  };

  const renderStoryItem = ({item, index}: {item: Story; index: number}) => {
    return <StoryItem item={item} index={index} viewStory={() => {}} />;
  };

  useEffect(() => {
    (async () => {
      const topStoryIds = await storyService.fetchTopStoryIds();
      setStoryIds(topStoryIds);
    })();
  }, []);

  useEffect(() => {
    if (storyIds.length) {
      fetchMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIds]);

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
