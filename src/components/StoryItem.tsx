import React, {FC} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Story} from 'models/Story';
import colors from 'constants/globalStyles';

type StoryItemProps = {
  item: Story;
  index: number;
  viewStory: (url: string) => void;
};

const StoryItem: FC<StoryItemProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const {item, viewStory} = props;

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
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => viewStory(item.url)}>
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
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  storyContainer: {
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

export default StoryItem;
