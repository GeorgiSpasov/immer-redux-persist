import {Dispatch} from 'redux';
import {
  BACKGROUND_COLOR,
  FONT_SIZE,
  SettingsActionTypes,
  settingsTypes,
} from './settingsTypes';

function setBackgroundAction(color: BACKGROUND_COLOR): SettingsActionTypes {
  return {
    type: settingsTypes.SET_BACKGROUND_COLOR,
    payload: color,
  };
}

function setFontSizeAction(size: FONT_SIZE): SettingsActionTypes {
  return {
    type: settingsTypes.SET_FONT_SIZE,
    payload: size,
  };
}

export const setBackground =
  (color: BACKGROUND_COLOR) => (dispatch: Dispatch<SettingsActionTypes>) => {
    dispatch(setBackgroundAction(color));
  };

export const setFontSize =
  (size: FONT_SIZE) => (dispatch: Dispatch<SettingsActionTypes>) => {
    dispatch(setFontSizeAction(size));
  };
