import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRestaurants, favoriteRestaurant } from '../../actions';

const Search = ({ restaurants, fetchRestaurants, favoriteRestaurant }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    fetchRestaurants(value);
  }

  const handleClick = (restaurant) => {
    favoriteRestaurant(restaurant)
  }

  return (
    <div>
      {/* {console.log(restaurants)} */}
      <input type="text" value={value} onChange={handleChange}/>
      <ul>
        {restaurants.search.map(restaurant => <li onClick={() => handleClick(restaurant)} key={restaurant.id}>{restaurant.name}</li>) }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
    restaurants: state.restaurants,
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: value => dispatch(searchRestaurants(value)),
  favoriteRestaurant: restaurant => dispatch(favoriteRestaurant(restaurant && restaurant.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);