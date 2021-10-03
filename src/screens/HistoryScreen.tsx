import HistoryItem from 'components/HistoryItem';
import ScreenContainer from 'components/ScreenContainer';
import {History} from 'models/History';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';

const HistoryScreen = () => {
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );
  const history = useSelector((state: RootState) => state.history.history);

  const renderStoryItem = ({item}: {item: History}) => {
    return <HistoryItem item={item} />;
  };

  return (
    <ScreenContainer>
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
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

export default HistoryScreen;
