import { connect } from "react-redux"
import Card from "../Card/Card"
import { orderCards, filterCards } from "../redux/actions.js"
import { useDispatch } from "react-redux"
import styles from "./Favorites.module.css"

export function Favorites({ myFavorites }) {
    
    const dispatch = useDispatch();

    const handleDispatch = (e) => {
        const { name, value } = e.target;

        if(name === 'order'){
            return dispatch(orderCards(value))
        }
        if(name === 'filter'){
            return dispatch(filterCards(value))
        }
    }

    return (
        <div>
            <div>
                <select name='order' onClick={handleDispatch}>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>

                <select name='filter' onClick={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

            {myFavorites?.map((fav => 
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}

        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)