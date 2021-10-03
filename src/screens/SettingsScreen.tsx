import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setBackground, setFontSize} from 'store/settings/settingsActions';
import {RootState} from 'store/store';
import {BACKGROUND_COLOR, FONT_SIZE} from 'store/settings/settingsTypes';
import StoryItem from 'components/StoryItem';
import colors from 'constants/globalStyles';

const sampleItem = {
  id: 'testId',
  title: 'Story Title',
  url: 'https://sample-url.com/',
  timestamp: Date.now(),
  score: 50,
  authorId: 'John Doe',
  user: {
    id: 'id',
    karma: 100,
  },
};

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );
  const fontSize = useSelector(
    (state: RootState) => state.settings.theme.fontSize,
  );
  const isDarkMode = backgroundColor !== BACKGROUND_COLOR.light;
  const fontColor = isDarkMode ? colors.light : colors.dark;

  const handleBackgroundChange = (color: BACKGROUND_COLOR) => {
    dispatch(setBackground(color));
  };

  const handleFontSizeChange = (size: FONT_SIZE) => {
    dispatch(setFontSize(size));
  };

  return (
    <View style={[{backgroundColor}, styles.container]}>
      <Text style={[{color: fontColor}, styles.label]}>
        Select Background Color
      </Text>
      <View style={styles.pickersContainer}>
        {Object.values(BACKGROUND_COLOR).map(color => (
          <TouchableOpacity
            key={color}
            style={[
              {backgroundColor: color},
              styles.picker,
              color === backgroundColor && styles.pickerSelected,
            ]}
            onPress={() => handleBackgroundChange(color)}
          />
        ))}
      </View>
      <Text style={[{color: fontColor}, styles.label]}>Select Font Size</Text>
      <View style={styles.pickersContainer}>
        {Object.values(FONT_SIZE).map(size => {
          if (!isNaN(+size)) {
            return (
              <TouchableOpacity
                key={size}
                style={[
                  styles.picker,
                  size === fontSize && styles.pickerSelected,
                ]}
                onPress={() => handleFontSizeChange(+size)}>
                <Text style={{color: fontColor, fontSize: +size}}>A</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
      <Text style={[{color: fontColor}, styles.label]}>Preview</Text>
      <StoryItem item={sampleItem} disabled />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  pickersContainer: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 54,
  },
  picker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerSelected: {
    borderWidth: 1,
    borderColor: colors.accentColor,
  },
});

export default SettingsScreen;
