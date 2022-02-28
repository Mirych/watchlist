import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Movies = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`        
        )
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);                            
                setItems(result.results);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
            <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Movies</h1>
                </div>     
                <h2>Popular</h2> 
                <Swiper
                    slidesPerView={5.5}
                    spaceBetween={5}                    
                    slidesPerGroup={2}
                    className="mySwiper"
                    >
                    { items.map(item => (    
                        <SwiperSlide key={item.id}>
                        <div className="movie-card">
                            <div className="movie-card-img">
                                <div className="overlay"></div>            
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} 
                                    alt={`${item.poster} Poster`}
                                /> 
                                </div>
                            <p className='movie-card-title'>{item.title}</p>
                        </div>   
                        </SwiperSlide>                                
                    )) }                                                   
                </Swiper>                                  
            </div>
        </div>
        );
      }
    }
