import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addFavoriteMovie, removeFavoriteMovie, selectOption } from '../store/Reducer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import Remove from '@mui/icons-material/Remove';

const Container = styled.div`
    width: 300px;
    height: 400px;
    position: relative;
    display: flex;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    flex-direction: column;
    box-shadow: 11px 11px 21px -18px rgba(0,0,0,0.52);
`

const ContentCon = styled.div`
    flex: 1;
    padding: 1rem;
`

const ImgContainer = styled.div`
    width: 100%;
    flex: 2;
    height: 250px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`

const Button = styled.button`
    padding: 0.2rem;
    border-radius: 50%;
    background-color: white;
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        color: ${props => props.heart ? "red" : "lightgrey"};

    }

`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    position: absolute;
    right: 20px;
    bottom: 15px;
`

const MovieCard = ({ movie: { id, title, release_date, favorites, poster_path}}) => {
    
    const dispatch = useDispatch();

    const { favoriteMovies } = useSelector((state) => state.movies);

    const handleAddFavoriteMovie = () => {
        const isMovieAlreadyInFavorites = favoriteMovies.some(
          (favoriteMovie) => favoriteMovie.id === id
        );
        if (!isMovieAlreadyInFavorites) {
          dispatch(
            addFavoriteMovie({
              id,
              title,
              release_date,
              favorites,
              poster_path,
            })
          );
        }
      };

      const handleRemoveFavoriteMovie = () => {
        dispatch(removeFavoriteMovie({ id }));
      };

    const isMovieInFavorites = favoriteMovies.some(
        (favoriteMovie) => favoriteMovie.id === id
    );

    return (
    <Container>
        <ImgContainer>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie thumbnail"/>
        </ImgContainer>
        <ContentCon>
            <div style={{marginBottom: "0.5rem"}}><strong>Title: </strong>{title}</div>
            <div style={{marginBottom: "0.5rem"}}><strong>Year: </strong>{release_date}</div>
            <ButtonContainer>
                    {isMovieInFavorites ? (
                        <Button onClick={handleRemoveFavoriteMovie}><Remove /></Button>
                    ) : (
                        <Button heart onClick={handleAddFavoriteMovie}><FavoriteBorderIcon /></Button>
                    )}
            </ButtonContainer>
        </ContentCon>
    </Container>
  )
}



export default MovieCard