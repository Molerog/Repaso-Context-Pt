export const Appreducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        user: action.payload
      };
    case "GET_SELECTED_LANGUAGE":
        return{
        ...state,
        language: action.payload
        }
      case "GET_SELECTED_THEME":
        return{
          ...state,
        theme: action.payload
        }
    default:
      return state;
  }
};
