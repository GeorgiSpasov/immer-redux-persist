import ScreenContainer from 'components/ScreenContainer';
import StoryItem from 'components/StoryItem';
import {Story} from 'models/Story';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';

const FavoritesScreen = () => {
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const renderStoryItem = ({item}: {item: Story}) => {
    return <StoryItem item={item} />;
  };

  return (
    <ScreenContainer>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={renderStoryItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{backgroundColor}, styles.scrollContainer]}
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

export default FavoritesScreen;
