export function addCharacter(character) {
  return {
    type: "ADD_CHARACTER",
    payload: character,
  };
}

export function deleteCharacter(id) {
  return {
    type: "DELETE_CHARACTER",
    payload: id,
  };
}

export function filterCards(status) {
  return {
    type: "FILTER",
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: "ORDER",
    payload: id,
  };
}
