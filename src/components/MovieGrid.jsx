import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addMovie } from '../store/Reducer'
import Pagination from './Pagination'

const Container = styled.div`
    min-height: 50vh;
`

const Wrapper = styled.div`
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

const Loader = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const MovieGrid = () => {
  

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    const fetchMovies = () => {
      setLoading(true);
      
      let endpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&query=g&language=en-US&page=${page}`;
      
      if (searchQuery) {
        endpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
      }

    fetch(endpoint)
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
        .then(data => dispatch(addMovie(data)))
          .catch(error => console.log(error.message));
      };

    const searchQuery = useSelector((state) => state.searchQuery);
    const { movies, favoriteMovies } = useSelector((state) => state.movies)
    const selectedOption = useSelector((state) => state.selectedOptions);

    // UseEffects
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // set loading to false after 3 seconds
      }, 1000);
        fetchMovies();

      }, [searchQuery, page])
    
    const displayedMovies =
    selectedOption === "favorite"
      ? favoriteMovies.length > 0
        ? favoriteMovies
        : null
      : movies.results;

    console.log(movies.results);

    const totalPages = movies.total_pages || 1;

      const handlePageChange = (newPage) => {
        setPage(newPage);
      };
  return (
    <Container>
      {!loading ? (
        <>
        <Wrapper>
            {displayedMovies? (
                displayedMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
            ))) : (
                <div style={{display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", paddingTop: "2rem"}}>
                    <h1 style={{marginBottom: "1rem"}}>You have no favorite movies listed yet</h1>
                    <p>Go back and add some!</p>
                </div>
            )}
            {displayedMovies == 0 && (
              <div style={{display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", paddingTop: "2rem"}}>
                  <h1 style={{marginBottom: "1rem"}}>Movie Listing Empty! </h1>
                  <p>Try again...</p>
              </div>
            )}
        </Wrapper>
        {selectedOption == "featured" && movies.results != 0 && (
           <Pagination
           currentPage={page}
           totalPages={totalPages}
           onPageChange={handlePageChange}
         />
        )}
        
        </>
        
      ) : (
        <div style={{alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", paddingTop: "5rem"}}>
                    <h1 style={{marginBottom: "1rem"}}>Loading..</h1>
                    <p style={{fontSize: "1.2rem", marginBottom: "1rem"}}>Hang tight! We're fetching the movies for you</p>
                    <Loader />
        </div>
      )}
      
    </Container>
  )
}

export default MovieGrid