import {
  DELETE_FAVORITE,
  GET_FAVORITE, ADD_FAVORITE,
  FILTER,
  ORDER,
} from "./actionTypes";
import axios from "axios"

export function addCharacter(character) {
  return async function (dispatch) {
    try {
      const request = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      return dispatch({
        type: ADD_FAVORITE,
        payload: request.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
    
  }
}

export function getFavorite() {
  return async function (dispatch) {
    try {
      const request = await axios.get(
      "http://localhost:3001/rickandmorty/fav");
      return dispatch({
        type: GET_FAVORITE,
        payload: request.data,
      });
    }
    catch (error) {
      throw new Error(error.message)
    }
  };
}

export function deleteCharacter(id) {
  return async function (dispatch) {
    try {
      const result = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      console.log(result);
      const dataDeleted = result.data;
      return dispatch({
        type: DELETE_FAVORITE,
        payload: dataDeleted,
      });
    } catch (error) {
      console.log(error);
    }
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
