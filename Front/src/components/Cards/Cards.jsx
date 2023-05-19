import  Card  from '../Card/Card';
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   
   return (<div>{characters.map((character =>
      <Card key={character.name}
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         status={character.status}
         origin={character.origin}
         id={character.id}
         onClose={props.onClose}
      />))}
   </div>
   );
}
