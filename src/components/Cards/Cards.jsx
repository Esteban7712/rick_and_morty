import  Card  from '../Card/Card';
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   
   return <div>{characters.map((character =>
      <Card key = {character.name}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id ={character.id}
          onClose={props.onClose}  
      />))}
   </div>
}
