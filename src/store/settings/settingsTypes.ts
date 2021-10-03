export enum BACKGROUND_COLOR {
  light = '#FFFFFF',
  medium = '#264653',
  dark = '#000000',
}

export enum FONT_SIZE {
  small = 10,
  medium = 14,
  large = 24,
}

export enum settingsTypes {
  SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR',
  SET_FONT_SIZE = 'SET_FONT_SIZE',
}

export interface SettingsState {
  theme: {
    backgroundColor: BACKGROUND_COLOR;
    fontSize: FONT_SIZE;
  };
}

interface SetBackgroundAction {
  type: typeof settingsTypes.SET_BACKGROUND_COLOR;
  payload: BACKGROUND_COLOR;
}

interface SetFontSizeAction {
  type: typeof settingsTypes.SET_FONT_SIZE;
  payload: FONT_SIZE;
}

export type SettingsActionTypes = SetBackgroundAction | SetFontSizeAction;
