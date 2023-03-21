import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 5vh;
    background-color: #23b04e;
    color: white;
    margin-top: 1rem;
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem;
`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <h1>Footer</h1>
        </Wrapper>
    </Container>
  )
}

export default Footer