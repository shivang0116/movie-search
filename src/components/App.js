import React from "react";
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { data } from '../data';
import { addMovies } from "../actions";
import { showMovie, showFavourite } from "../actions";
import { StoreContext } from "../index";

class App extends React.Component {

    componentDidMount() {
        console.log("Mounted");
        const { store } = this.props;
        store.subscribe(() => {
            console.log("Updated");
            console.log(store.getState());
            this.forceUpdate();
        })

        // store.dispatch({
        //   type: "ADD_MOVIES",
        //   movies: data
        // })
        store.dispatch(addMovies(data));
    }

    render() {
        const { list, favourites, isFavourite } = this.props.store.getState().movies;
        const movies = isFavourite ? favourites : list;

        const isMovieFavourite = (movie) => {
            let index = favourites.indexOf(movie);
            if (index === -1) {
                return false;
            }
            return true;
        }

        const shMovie = () => {
            this.props.store.dispatch(showMovie());
        }

        const shFavourite = () => {
            this.props.store.dispatch(showFavourite());
        }

        console.log("Rendering");
        return (
            <div className="App" >
                <Navbar />

                <div className="tabs" >
                    <div className={`tab ${isFavourite ? '' : 'active-tab'}`} onClick={() => shMovie()}> Movies </div>
                    <div className={`tab ${isFavourite ? 'active-tab' : ''}`} onClick={() => shFavourite()}> Favourites </div>
                </div>

                {movies.map((movie, index) => {
                    return <MovieCard
                        isMovieFavourite={isMovieFavourite(movie)}
                        movie={movie}
                        key={`movie-${index}`} />
                })}

                {movies.length === 0 ? <div className="no-movie">No movies to display!</div> : null}
            </div>
        );
    }
}

class AppWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) =>
                    <App store={store} />
                }
            </StoreContext.Consumer>
        )
    }

}

export default AppWrapper;