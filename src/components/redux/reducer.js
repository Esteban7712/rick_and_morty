export const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        myFavorites: [...state.myFavorites,action.payload]
      };

    case "DELETE_CHARACTER":
      return {
        ...state,
        // eslint-disable-next-line no-undef
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== action.payload
        ),
      };

    default:
      return {
        state,
      };
  }
};

export default rootReducer;
