
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import MostPopular from './Components/MostPopular'
import OurMasks from './Components/OurMasks'
import NewArrivals from './Components/NewArrivals'
import Involve from './Components/Involve'
import Footer from './Components/Footer'
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <MostPopular/>
      <NewArrivals/>
      <OurMasks/>
      <Involve/>
      <Footer/>
    </div>
  )
}

export default App
