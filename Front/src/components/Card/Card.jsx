import { Link } from "react-router-dom";
import styled from "styled-components"
import styles from "./Card.module.css"
import { addCharacter, deleteCharacter } from "../redux/actions.js"
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Imagenes = styled.img`
   border-radius: 100px
`
const Carta = styled.div`
   
   display: inline-table;
   margin: 5px; 
   border: 1px solid white;
   border-radius: 10px;
   background-color: #64DD17;
   padding: 30 px;
   width: 350px;
`



export function Card(props) {

   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      let charac = {
        name: props.name,
        gender: props.gender,
        species: props.species,
        id: props.id,
        image: props.image,
      };
      if (isFav) {
        setIsFav(false);
        dispatch(deleteCharacter(props.id));
        
      } else {
        setIsFav(true);
        dispatch(addCharacter(charac));
      }
      /* if (isFav) {
         setIsFav(false)
         props.deleteCharacter(props.id)
      } else {
         setIsFav(true)
         props.addCharacter(props)
      } */
   }

   useEffect(() => {
     props.myFavorites?.forEach((character) => {
       if (character.id === props.id) {
         setIsFav(true);
       }
     });
   }, [favorites]);

   return (
     <Carta>
       <div className={styles.buttonContainer}>
         {isFav ? (
           <button onClick={handleFavorite}>❤️</button>
         ) : (
           <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={() => props.onClose(props.id)}>X</button>
       </div>
       <Link to={`/detail/${props.id}`}>
         <h1>{props.name}</h1>
       </Link>
       <h2>Species: {props.species}</h2>
       <h2>Gender: {props.gender}</h2>
       <Imagenes img src={props.image} alt="Img not found" />
     </Carta>
   );
}

 /* export function mapDispatchToProps(dispatch) {
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
export default connect(mapStateToProps, mapDispatchToProps)(Card); */

export default Card;
