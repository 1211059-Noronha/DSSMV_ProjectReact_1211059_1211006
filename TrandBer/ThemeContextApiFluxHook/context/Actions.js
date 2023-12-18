export const SELECT_THEME = 'SELECT_THEME';
/*
export function selectTheme(name) {
    return { 
      type: SELECT_THEME, 
      payload: {
        theme: name
      } 
    }
  };
*/
/*
  export const selectTheme = (name) =>{
    return { 
      type: SELECT_THEME, 
      payload: {
        theme: name
      } 
    }
  };
*/
  export const selectTheme = (name) =>({ 
      type: SELECT_THEME, 
      payload: {
        theme: name
      } 
    }
  );
 
  