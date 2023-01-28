import { useState } from "react";
import styled from "styled-components";

const Boton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #64DD17;
  border: none;
  color: #000;
  text-align: center;
  width: 90px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
   
`

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const handleChange = (e) => {
      const { value } = e.target;
      setCharacter( value )
      //Otra Forma
      /* setCharacter({
         character: e.target.value 
      }) */
   }

   return (
      <div>
         <input type='search' onChange={handleChange} placeholder="Buscar"/>

         <Boton onClick={() =>
            props.onSearch(character)}
         >Agregar</Boton>
      </div>
   );
}
