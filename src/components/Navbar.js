import React from "react";
import { StoreContext } from "..";
import { addResult, addResultToMovie } from "../actions";

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    setInput(event) {
        this.setState({
            input: event.target.value
        })
    }

    showResult() {
        const url = `http://www.omdbapi.com/?t=${this.state.input}&apikey=9ceb7f02`;
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                // console.log(movie);
                this.props.store.dispatch(addResult(movie));
            });
    }

    render() {

        const { result, showSearch } = this.props.store.getState().search;
        const addMovie = () => {
            this.props.store.dispatch(addResultToMovie(result));
        }

        return (
            <div className="navbar">
                <input className="search-input" type="text" onChange={(e) => this.setInput(e)} />
                <div className="search-btn" onClick={() => this.showResult()}>Search</div>

                {showSearch ?
                    <div className="result">
                        <div className="result-image">
                            <img src={result.Poster} alt="" />
                        </div>

                        <div className="result-description">
                            <div className="result-title"><strong>{result.Title}</strong></div>
                            <div className="result-director">{result.Genre}</div>
                            <div className="result-footer">
                                <div className="result-ratings">{result.imdbRating}</div>
                                <div className="result-tab-add" onClick={() => addMovie()}>
                                    Add To Movies
                                </div>
                            </div>
                        </div>
                    </div> : null
                }

            </div>
        );
    }
}
class NavbarWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <Navbar store={store} />}
            </StoreContext.Consumer>
        )
    }
}

export default NavbarWrapper;
