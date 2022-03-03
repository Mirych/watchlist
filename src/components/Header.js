import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Watchlist</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <i className="fas fa-film"></i>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <i className="fas fa-bookmark"></i>
                            <Link to="/">My Watch List</Link>
                        </li>
                        <li>
                            <i className="fas fa-eye"></i>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">
                            <i className="fas fa-search"></i>
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
