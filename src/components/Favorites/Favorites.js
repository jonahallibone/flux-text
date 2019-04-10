import React from "react";
import { connect } from 'react-redux';
import FavoriteItem from "./FavoriteItem";
import {  } from '../../actions';

const Favorites = ({ restaurants }) => {
    return (
        <div>
            <h3>Favorites</h3>
            <ul>
                {
                    restaurants ? restaurants.favorites.map(favorite => <FavoriteItem favorite={favorite} key={favorite.id} />) : null
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites);