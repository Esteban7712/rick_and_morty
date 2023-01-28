export const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };

    case "DELETE_CHARACTER":
      return {
        ...state,
        // eslint-disable-next-line no-undef
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== action.payload
        ),
      };

    case "FILTER":
      const filterCopy = [...state.allCharacters];

      const filterGender = filterCopy.filter(
        (char) => char.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filterGender,
      };

    case "ORDER":
      const orderCopy = [...state.allCharacters];

      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return action.payload === "Ascendente" ? 1 : -1;
        }
        if (a.id < b.id) {
          return action.payload === "Ascendente" ? -1 : 1;
        } else return 0;
      });

      return {
        ...state,
        myFavorites: order,
      };

    default:
      return {
        state,
      };
  }
};

export default rootReducer;
