import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({movie, type}) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie 
    ? true 
    : storedMovieWatched 
    ? true 
    : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="inner-card-controls">
            {type === 'all' && (
                <>
                    <button 
                        className="ctrl-btn"
                        disabled={watchlistDisabled}
                        onClick={() => moveToWatchlist(movie)}
                    >                        
                        <i className="fas fa-bookmark"></i>                
                    </button>

                    <button 
                        className="ctrl-btn"
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                </>
            )}

            {type === 'watchlist' && (
                <>
                    <button 
                        className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button 
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && 
            (
                <>
                <button 
                    className="ctrl-btn"
                    onClick={() => moveToWatchlist(movie)}
                >
                    <i className="fa-fw far fa-eye-slash"></i>
                </button>

                <button 
                    className="ctrl-btn"
                    onClick={() => removeFromWatched(movie.id)}
                >
                    <i className="fa-fw fa fa-times"></i>
                </button>
                </>
            )
            }
        </div>
    )
}
