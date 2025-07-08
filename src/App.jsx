import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Learn from './components/Learn'
import Seasonal from './components/Seasonal'
import TapTry from './components/TapTry'
import TopSeller from './components/TopSeller'
import TryOneSection from './components/TryOneSection'
import Virtual from './components/Virtual'
import Spotlight from './components/Spotlight'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TopSeller />
      <Virtual />
      <TapTry />
      <Spotlight />
      <Learn />
      <Seasonal />
      <TryOneSection />
      <Footer />
    </>
  )
}

export default App
