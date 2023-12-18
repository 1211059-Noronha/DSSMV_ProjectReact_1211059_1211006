import { SELECT_THEME } from './Actions'


const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_THEME:
      const name = action.payload.theme;
      const theme = state.availableThemes.find((theme) => (theme.name === name));
      return {
        ...state,
        selectedTheme: theme,
      };
    default:
      return state;
  }
};

export default reducer;
