import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store/store';

interface IProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<IProps> = ({children}) => {
  const backgroundColor = useSelector(
    (state: RootState) => state.settings.theme.backgroundColor,
  );

  return <View style={[{backgroundColor}, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
