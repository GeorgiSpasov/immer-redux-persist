import HistoryItem from 'components/HistoryItem';
import {History} from 'models/History';
import React from 'react';
import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';

const HistoryScreen = () => {
  const history = useSelector((state: RootState) => state.history.history);

  const isDarkMode = useColorScheme() === 'dark';

  const renderStoryItem = ({item, index}: {item: History; index: number}) => {
    return <HistoryItem item={item} index={index} />;
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
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

export default HistoryScreen;
