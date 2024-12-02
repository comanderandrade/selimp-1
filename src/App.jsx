import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Description from './components/description/description'
import OQueFazemos from './components/o-que-fazemos/oquefazemos'
import QuemSomos from './components/quem-somos/quemSomos'
import Contato from './components/contato/contato.jsx'
import './App.css'



function App() {
  return (
    <>
      <Header />
      <Home />
      <Description />
      <OQueFazemos />
      <QuemSomos />
      <Contato />
      <Footer />

    </>
  )
}

export default App

