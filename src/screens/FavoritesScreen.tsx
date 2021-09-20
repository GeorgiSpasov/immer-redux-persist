import StoryItem from 'components/StoryItem';
import {Story} from 'models/Story';
import React from 'react';
import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';

const FavoritesScreen = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const isDarkMode = useColorScheme() === 'dark';

  const renderStoryItem = ({item, index}: {item: Story; index: number}) => {
    return <StoryItem item={item} index={index} />;
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={renderStoryItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContainer, backgroundStyle]}
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

export default FavoritesScreen;
