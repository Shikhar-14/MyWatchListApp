import React from "react";

const MovieList = (props)=>{
    const FavouriteComponent = props.favouriteComponent
    return (
        <>
            {props.movies.map((movie,index)=> (
                <div className="image-container d-flex justify-content-smart m-3">
                 <img src={movie.Poster} alt='Poster not available'></img>
                 <div className="overlay d-flex align-items-centre justify-content-centre">
                    <FavouriteComponent />
                 </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;