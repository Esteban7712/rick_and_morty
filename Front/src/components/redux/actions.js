import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./actionTypes";
import axios from "axios"

export function addCharacter(character) {
  return async function (dispatch) {
    try {
      const request = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      return request;
    } catch (error) {
      throw new Error(error.message);
    }
    
  }
}

export function getFavorites() {
  return async function (dispatch) {
    try {
      const request = await axios.get(
      "http://localhost:3001/rickandmorty/fav");
      return dispatch({
        type: ADD_FAVORITE,
        payload: request.data,
      });
    }
    catch (error) {
      throw new Error(error.message)
    }
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
