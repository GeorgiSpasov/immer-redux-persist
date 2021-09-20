import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Story} from 'models/Story';
import colors from 'constants/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/store';
import {addFavorite, removeFavorite} from 'store/favorites/favoritesActions';
import {addToHistory} from 'store/history/historyActions';
import {selectStory} from 'store/news/newsActions';

type StoryItemProps = {
  item: Story;
  index: number;
};

const StoryItem: FC<StoryItemProps> = props => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const isDarkMode = useColorScheme() === 'dark';
  const {item} = props;
  const isFavorite = !!favorites.find(f => f.id === item.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(props.item.id));
    } else {
      dispatch(addFavorite(props.item));
    }
  };

  const preview = () => {
    dispatch(selectStory(props.item));
    addHistory();
  };

  const addHistory = () => {
    dispatch(addToHistory(props.item));
  };

  const isToday = (someDate: number) => {
    const today = new Date();
    const date = new Date(someDate);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const dateString = isToday(item.timestamp)
    ? new Date(item.timestamp).toLocaleTimeString('en-us', {
        hour: 'numeric',
        minute: '2-digit',
      })
    : new Date(item.timestamp).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.storyContainer} onPress={preview}>
        <View style={styles.content}>
          <Text
            style={[
              styles.storyTitle,
              {
                color: isDarkMode ? colors.light : colors.dark,
              },
            ]}>
            {item.title}
          </Text>
          <Text style={styles.storyUrl}>{item.url}</Text>
          <Text style={styles.storyData}>
            {`${item.score} points by ${item.authorId} [${item.user.karma} karma] ${dateString}`}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleFavorite}>
        <MaterialIcons
          name="star"
          size={24}
          color={isFavorite ? colors.accentColor : colors.secondaryTextColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  storyContainer: {
    flex: 1,
    paddingVertical: width / 56,
    flexDirection: 'row',
  },
  iconContainer: {
    width: width / 12,
    alignItems: 'center',
    paddingTop: width / 56,
  },
  indexContainer: {
    alignItems: 'center',
  },
  indexText: {
    fontSize: width / 22,
    color: colors.secondaryTextColor,
    marginRight: 4,
  },
  content: {
    flex: 1,
  },
  storyTitle: {
    color: colors.secondaryTextColor,
    fontSize: width / 22,
    fontWeight: '400',
  },
  storyUrl: {
    fontSize: width / 32,
    color: colors.secondaryTextColor,
    paddingVertical: 2,
    fontStyle: 'italic',
  },
  storyData: {
    fontSize: width / 26,
    color: colors.secondaryTextColor,
    fontWeight: '400',
  },
});

export default StoryItem;
