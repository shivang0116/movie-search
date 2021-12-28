export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITES="ADD_FAVOURITES";
export const REMOVE_FAVOURITES="REMOVE_FAVOURITES";
export const SHOW_MOVIE="SHOW_MOVIE";
export const SHOW_FAVOURITE="SHOW_FAVOURITE";
export const ADD_RESULT="ADD_RESULT";
export const ADD_RESULT_TO_MOVIES="ADD_RESULT_TO_MOVIES";
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies,
    }
}

export function addFavourites(movie){
    return {
        type:ADD_FAVOURITES,
        movie,
    }
}

export function removeFavourites(movie){
    return {
        type:REMOVE_FAVOURITES,
        movie,
    }
}
export function showMovie(){
    return {
        type:SHOW_MOVIE
    }
}
export function showFavourite(){
    return {
        type:SHOW_FAVOURITE
    }
}
export function addResult(result){
    return{
        type:ADD_RESULT,
        result
    }
}
export function addResultToMovie(movie){
    return{
        type:ADD_RESULT_TO_MOVIES,
        movie
    }
}