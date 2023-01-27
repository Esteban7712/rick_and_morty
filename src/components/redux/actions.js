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
