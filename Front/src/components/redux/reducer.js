import { DELETE_FAVORITE, ADD_FAVORITE,GET_FAVORITE,  FILTER, ORDER } from "./actionTypes";

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
        myFavorites: payload,
      };

    case DELETE_FAVORITE:
      const newAllCharacters = state.allCharacters.filter(
        (fav) => fav.id !== payload
      );
      return {
        ...state,
        allCharacters: newAllCharacters,
        myFavorites: newAllCharacters,
      };
    /* return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== payload
        ),
      }; */

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

    case GET_FAVORITE:
      return {
        ...state,
        allCharacters: payload,
        myFavorites: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
