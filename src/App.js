import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';

const App=()=>{
  const [movies, setMovies] = useState([]);
  const [favourites, setfavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue)=>{
  const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=e6e6e120`;
  const response= await fetch(url);
  const responseJson=await response.json();
  
 if(responseJson.Search) {
   setMovies(responseJson.Search);
  }
};


useEffect(()=>{
  getMovieRequest(searchValue);

}, [searchValue]);

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setfavourites(newFavouriteList);
};

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite)=> favourite.imdbID != movie.imdbID
    );

    setfavourites(newFavouriteList);
};


return (
  <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-centre mt-4 mb-4'>
      <MovieListHeading headings = "Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
     <MovieList movies = {movies} handlefavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourite}/>


    </div>
    <div className='row d-flex align-items-centre mt-4 mb-4'>
      <MovieListHeading headings = "Favourites"/>
    </div>
    <div className='row'>
     <MovieList 
      movies = {favourites} 
      handlefavouritesClick={removeFavouriteMovie} 
      favouriteComponent={RemoveFavourites}/>


    </div>
  </div>
  );
};

export default App;