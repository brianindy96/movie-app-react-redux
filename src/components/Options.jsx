import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectOption } from '../store/Reducer'

const Container = styled.div`
    min-height: 5vh;
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1rem;
`

const Button = styled.button`
    margin-right: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 30px;
    border: 1px solid #23b04e;
    background-color: white;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;

    &:hover {
        transform: scale(0.99);
    }
`

const Options = () => {


    const dispatch = useDispatch()

    const selectedOption = useSelector((state) => state.selectedOptions);

    useEffect(() => {
        console.log(selectedOption)
    }, [selectedOption])

    function handleFeaturedClick() {
        dispatch(selectOption('featured'))
    }
    
      function handleFavoriteClick() {
        dispatch(selectOption('favorite'))
    }
    
  return (
    <Container>
        <Wrapper>
            <Button
            onClick={handleFeaturedClick}
            >Featured</Button>
            <Button
            onClick={handleFavoriteClick}
            >Favorites</Button>
        </Wrapper>
    </Container>
  )
}

export default Options