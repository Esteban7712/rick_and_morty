import { Link } from "react-router-dom";
import styled from "styled-components"
import { addCharacter, deleteCharacter } from "../redux/actions.js"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Imagenes = styled.img`
   border-radius: 100px
`
const Carta = styled.div`
   
   display: inline-table;
   margin: 5px; 
`

export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteCharacter(props.id)
      } else {
         setIsFav(true)
         props.addCharacter(props)
      }
   }

   useEffect(() => {
   props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);

   return (
      <Carta>
         {isFav ?
            (<button onClick={handleFavorite}>❤️</button>) :
            (<button onClick={handleFavorite}>🤍</button>)}
         <button onClick={() => props.onClose(props.id)}>X</button>
         {/* <hr/> */}
         <Link to={`/detail/${props.id}`}><h1>{props.name}</h1></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <Imagenes img src={props.image} alt="Img not found" />
      </Carta>
   );
}

 export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: function (character) {
         dispatch(addCharacter(character))
      },

      deleteCharacter: function (id) {
         dispatch(deleteCharacter(id))
      }
   }
 }
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
