import {
  SettingsState,
  SettingsActionTypes,
  settingsTypes,
  BACKGROUND_COLOR,
  FONT_SIZE,
} from './settingsTypes';

const initialState: SettingsState = {
  theme: {
    backgroundColor: BACKGROUND_COLOR.light,
    fontSize: FONT_SIZE.medium,
  },
};

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes,
): SettingsState {
  switch (action.type) {
    case settingsTypes.SET_BACKGROUND_COLOR: {
      return {
        ...state,
        theme: {
          ...state.theme,
          backgroundColor: action.payload,
        },
      };
    }
    case settingsTypes.SET_FONT_SIZE: {
      return {
        ...state,
        theme: {
          ...state.theme,
          fontSize: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
