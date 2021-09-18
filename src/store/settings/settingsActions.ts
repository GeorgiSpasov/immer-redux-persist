import {
  BACKGROUND_COLOR,
  FONT_SIZE,
  SettingsActionTypes,
  settingsTypes,
} from './settingsTypes';

export function setBackgroundAction(
  color: BACKGROUND_COLOR,
): SettingsActionTypes {
  return {
    type: settingsTypes.SET_BACKGROUND_COLOR,
    payload: color,
  };
}

export function setFontSizeAction(size: FONT_SIZE): SettingsActionTypes {
  return {
    type: settingsTypes.SET_FONT_SIZE,
    payload: size,
  };
}
