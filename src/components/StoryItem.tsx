import React, {FC, useMemo} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Story} from 'models/Story';
import {BACKGROUND_COLOR, COLORS} from 'constants/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/store';
import {NewsActions} from 'store/news/newsReducer';
import {FavoritesActions} from 'store/favorites/favoritesReducer';
import {HistoryActions} from 'store/history/historyReducer';

type StoryItemProps = {
  item: Story;
  disabled?: boolean;
};

const StoryItem: FC<StoryItemProps> = ({item, disabled}) => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );
  const fontSize = useSelector(
    (state: RootState) => state.settings.theme.fontSize,
  );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const isDarkMode = backgroundColor !== BACKGROUND_COLOR.light;
  const isFavorite = !!favorites.find(f => f.id === item.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(FavoritesActions.removeFavorite(item.id));
    } else {
      dispatch(FavoritesActions.addFavorite(item));
    }
  };

  const addHistory = () => {
    dispatch(
      HistoryActions.addToHistory({
        ...item,
        dateRead: Date.now(),
      }),
    );
  };

  const preview = () => {
    dispatch(NewsActions.selectStory(item));
    addHistory();
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

  const dateString = useMemo(() => {
    return isToday(item.dateRead ? item.dateRead : item.timestamp)
      ? new Date(
          item.dateRead ? item.dateRead : item.timestamp,
        ).toLocaleTimeString('en-us', {
          hour: 'numeric',
          minute: '2-digit',
        })
      : new Date(
          item.dateRead ? item.dateRead : item.timestamp,
        ).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  }, [item.dateRead, item.timestamp]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.storyContainer}
        disabled={disabled}
        onPress={preview}>
        <View style={styles.content}>
          <Text
            style={[
              {fontSize: fontSize * 1.5},
              styles.storyTitle,
              {
                color: isDarkMode ? COLORS.light : COLORS.dark,
              },
            ]}>
            {item.title}
          </Text>
          <Text style={[{fontSize: fontSize * 0.8}, styles.storyUrl]}>
            {item.url}
          </Text>
          {item.dateRead ? (
            <Text style={styles.storyData}>Seen {dateString}</Text>
          ) : (
            <Text style={[{fontSize: fontSize}, styles.storyData]}>
              {`${item.score} points by ${item.authorId} [${item.user.karma} karma] ${dateString}`}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {!item.dateRead && (
        <TouchableOpacity
          style={styles.iconContainer}
          disabled={disabled}
          onPress={toggleFavorite}>
          <MaterialIcons
            name="star"
            size={24}
            color={isFavorite ? COLORS.accentColor : COLORS.secondaryTextColor}
          />
        </TouchableOpacity>
      )}
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
    color: COLORS.secondaryTextColor,
    marginRight: 4,
  },
  content: {
    flex: 1,
  },
  storyTitle: {
    color: COLORS.secondaryTextColor,
    fontWeight: '400',
  },
  storyUrl: {
    color: COLORS.secondaryTextColor,
    paddingVertical: 2,
    fontStyle: 'italic',
  },
  storyData: {
    color: COLORS.secondaryTextColor,
    fontWeight: '400',
  },
});

export default React.memo(StoryItem);
