import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import colors from 'constants/globalStyles';
import {History} from 'models/History';
import {useDispatch} from 'react-redux';
import {selectStory} from 'store/news/newsActions';

type HistoryItemProps = {
  item: History;
  index: number;
};

const HistoryItem: FC<HistoryItemProps> = props => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const {item} = props;

  const preview = () => {
    dispatch(selectStory(props.item));
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

  const dateString = isToday(item.dateRead.getTime())
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
        <Text style={styles.storyData}>Seen {dateString}</Text>
      </View>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    paddingVertical: width / 56,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
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

export default HistoryItem;
