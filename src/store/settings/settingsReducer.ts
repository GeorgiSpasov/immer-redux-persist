import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from 'immer-reducer';
import {BACKGROUND_COLOR, FONT_SIZE} from 'constants/globalStyles';

interface SettingsState {
  theme: {
    backgroundColor: BACKGROUND_COLOR;
    fontSize: FONT_SIZE;
  };
}

const initialState: SettingsState = {
  theme: {
    backgroundColor: BACKGROUND_COLOR.light,
    fontSize: FONT_SIZE.medium,
  },
};

class Reducer extends ImmerReducer<SettingsState> {
  clearState() {
    this.draftState = {...initialState};
  }
  setBackground(backgroundColor: BACKGROUND_COLOR) {
    this.draftState.theme.backgroundColor = backgroundColor;
  }
  setFontSize(fontSize: FONT_SIZE) {
    this.draftState.theme.fontSize = fontSize;
  }
}

const SettingsActions = createActionCreators(Reducer);
const settingsReducer = createReducerFunction(Reducer, initialState);

export {settingsReducer, SettingsActions};
