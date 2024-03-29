import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Imagenes = styled.img`
  border-radius: 100px;
`;

const Carta = styled.div`
  display: inline-table;
  margin: 5px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #64dd17;
  padding: 30 px;
  width: 350px;
`;

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`) //`https://rickandmortyapi.com/api/detail/${detailId}`
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <Carta>
      <Link to={"/home"}>
        <button>To Home</button>
      </Link>
      <h1>{character.name}</h1>
      <h2>Gender: {character.gender}</h2>
      <h2>Origin: {character.origin?.name}</h2>
      <h2>status: {character.status}</h2>
      <h2>Last Seen: {character.location?.name}</h2>
      <Imagenes src={character.image} alt="not found"></Imagenes>
    </Carta>
  );
}
