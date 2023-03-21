import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import Options from './components/Options'
import styled from 'styled-components'

const GradientCon = styled.div`
  background: linear-gradient(180deg, rgba(34,167,74,1) 0%, rgba(35,176,78,1) 83%);
`

function App() {

  return (
    <div className="App">
      <GradientCon>
        <Navbar />
        <Hero />
      </GradientCon>
      <Options />
      <MovieGrid />
      <Footer />
    </div>
  )
}

export default App
