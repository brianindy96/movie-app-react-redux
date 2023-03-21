import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { setSearchQuery } from '../store/Reducer'
import { xs, sm, md } from '../responsiveness/responsive'

const Container = styled.div`
    min-height: 35vh;
    
`

const Wrapper = styled.div`
    max-width: 1280px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem 1rem;

    ${xs({ alignItems: "center" })};

    
`

const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;

    color: white;

    ${xs({ fontSize: '3rem', textAlign: "center" })};
`

const Subtitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 100;

    color: #ffffff;

    ${xs({ fontSize: '1.5rem', marginBottom: "2rem", textAlign: "center" })};
    ${sm({ fontSize: '2rem', marginBottom: "3rem" })};
    ${md({ fontSize: '2.5rem', marginBottom: "3rem" })};

`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const Search = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid white;
`

const ClearButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  font-size: 1rem;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  color: black;


`

const Hero = () => {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClearButtonClick = () => {
    setSearchText('');
    dispatch(setSearchQuery(''));
  };


  return (
    <Container>
        <Wrapper>
            <Title>Welcome</Title>
            <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit</Subtitle>
            <SearchContainer>
            <Search type="text" placeholder="Search for a movie" value={searchText} onChange={handleSearchTextChange} />
            {searchText.length > 0 && <ClearButton onClick={handleClearButtonClick}>X</ClearButton>}
            </SearchContainer>
        </Wrapper>
    </Container>
  )
}

export default Hero