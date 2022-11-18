import React from "react";

const movielist = (props)=>{
    
    return (
        <>
            {props.movies.map((movie,index)=> <div>
                <img src={movie.Poster}> </img>

            </div>
            )}
        </>
    )
}