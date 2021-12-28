import React from "react";
import { addFavourites, removeFavourites } from "../actions";
import { StoreContext } from '../index';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        const handleMovieFavourite = () => {
            this.props.store.dispatch(addFavourites(movie));
        }
        const handleMovieUnfavourite = () => {
            this.props.store.dispatch(removeFavourites(movie))
        }
        // console.log(this.props);
        return (
            <div className="movie-card">
                <div className="movie-image">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="movie-description">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="ratings">{movie.imdbRating}</div>
                        {this.props.isMovieFavourite ?
                            <div className="unfavorites" onClick={() => handleMovieUnfavourite()}>Unfavourite</div> :
                            <div className="favorites" onClick={() => handleMovieFavourite()}>Favourite</div>}                    </div>
                </div>
            </div>
        );
    }

}
class MovieCardWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <MovieCard 
                store={store} 
                movie={this.props.movie}
                isMovieFavourite={this.props.isMovieFavourite}/>}
            </StoreContext.Consumer>
        )
    }
}
export default MovieCardWrapper;
