import { Link } from "react-router-dom";
import styled from "styled-components"
import styles from "./Card.module.css"
import { addCharacter, deleteCharacter } from "../redux/actions.js"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

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
   props.myFavorites?.forEach((character) => {
      if (character.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites, props.id]);

   return (
      <Carta>
          <div className={styles.buttonContainer}>
         {isFav ?
            (<button onClick={handleFavorite}>❤️</button>) :
               (<button onClick={handleFavorite}>🤍</button>)}
            <button onClick={() => props.onClose(props.id)}>X</button>
            </div>
         {/* <hr/> */}
         <Link to={`/detail/${props.id}`}><h1>{props.name}</h1></Link>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
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
