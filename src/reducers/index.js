import {
    ADD_FAVOURITES,
    ADD_MOVIES,
    ADD_RESULT,
    ADD_RESULT_TO_MOVIES,
    REMOVE_FAVOURITES,
    SHOW_FAVOURITE,
    SHOW_MOVIE
} from "../actions";

import { combineReducers } from "redux";

const initialMovieState = {
    list: [],
    favourites: [],
    isFavourite: false
}

export function movies(state = initialMovieState, action) {
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        }
    }

    else if (action.type === ADD_FAVOURITES) {
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
    }

    else if (action.type === REMOVE_FAVOURITES) {
        const filteredArray = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
        );
        return {
            ...state,
            favourites: filteredArray
        }
    }

    else if (action.type === SHOW_MOVIE) {
        return {
            ...state,
            isFavourite: false
        }
    }

    else if (action.type === SHOW_FAVOURITE) {
        return {
            ...state,
            isFavourite: true
        }
    }

    else if(action.type === ADD_RESULT_TO_MOVIES){
        return {
            ...state,
            list:[action.movie,...state.list]
        }
    }

    return state;
}


const initialSearchState = {
    result: {},
    showSearch: false
}

export function search(state = initialSearchState, action) {
    if (action.type === ADD_RESULT) {
        return {
            ...state,
            result: action.result,
            showSearch: true
        }
    }

    else if(action.type === ADD_RESULT_TO_MOVIES) {
        return {
            ...state,
            showSearch: false
        }
    }

    return state;
}


export default combineReducers({
    movies,
    search
})