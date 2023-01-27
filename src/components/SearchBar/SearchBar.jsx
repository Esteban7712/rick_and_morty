import { useState } from "react";
//import "./searchBar.css"

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

         <button onClick={() =>
            props.onSearch(character)}
         >Agregar</button>
      </div>
   );
}
