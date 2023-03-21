import React, { useState } from 'react'
import styled from 'styled-components'
import { xs, sm, md } from '../responsiveness/responsive'

const Container = styled.div`
    /* background-color: #23b04e; */
    min-height: 5vh;

    ${xs({ height: "10vh" })};

`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1rem;
    color: white;
`

const Title = styled.h1`
    font-size: 2rem;
    padding: 0;
    margin: 0;
    cursor: pointer;

    ${xs({ fontSize: '1.7rem' })};

`

const Navbar = () => {

  const handleTitleClick = () => {
    window.location.href = '/';
  };

  return (
    <Container>
      <Wrapper>
        <Title onClick={handleTitleClick}>
          Movie App
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Navbar