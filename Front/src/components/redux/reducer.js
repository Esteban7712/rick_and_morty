import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== payload
        ),
      };

    case FILTER:
      const filterCopy = [...state.allCharacters];

      const filterGender = filterCopy.filter((char) => char.gender === payload);

      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER:
      const orderCopy = [...state.allCharacters];

      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascending" ? 1 : -1;
        }
        if (a.id < b.id) {
          return payload === "Descending" ? -1 : 1;
        } else return 0;
      });

      return {
        ...state,
        myFavorites: order,
      };

    default:
      return state;
  }
}

export default rootReducer;
