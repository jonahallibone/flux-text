
export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';
export const FAVORITE_RESTAURANT = 'FAVORITE_RESTAURANT';

export const searchRestaurants = term => async dispatch => {
const url = new URL('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="NYC"');
url.searchParams.set('term', term);

const response = await fetch(url, {
    headers: {
    "Content-Type" : "application/json",
    "Authorization" : "Bearer Crl7-ujFkEP_EngzqpR0BluFVUo0TpLIEtT670M1NGWKBTm8l7wiwqcZJeT7k3oO8W4JLRlhu8CjCNcI5SNce3UaOwp1kFoXIZb__kk1XjK7OjIevvGUW61HdS6uXHYx"
    }
});
const results = await response.json();

dispatch({ type: SEARCH_RESTAURANTS, results, term });
};

export const favoriteRestaurant = (id = null) => ({ type: FAVORITE_RESTAURANT, id });