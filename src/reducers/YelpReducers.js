import { SEARCH_RESTAURANTS, FAVORITE_RESTAURANT } from '../actions';

const initialShowState = {
    search: [],
    favorites: [],
    selected: null,
};

export const restaurants = (state = initialShowState, action) => {
    switch (action.type) {
    
        case SEARCH_RESTAURANTS:
            return {
                ...state,
                search: action.results.businesses
            };

        case FAVORITE_RESTAURANT:
            const filtered = state.search.filter(restaurant => restaurant.id === action.id);
            return {
                ...state,
                favorites: !state.favorites.includes(...filtered) ? [...state.favorites, ...filtered] : state.favorites
            };

        default:
            return state;

  }
};