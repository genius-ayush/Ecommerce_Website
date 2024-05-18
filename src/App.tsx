
import './App.css'
import Navbar from './Components/Navbar'
import HeroSlider from './Components/HeroSlider'
import FeaturesStrip from './Components/FeaturesStrip'
import Products from './Components/Products'
import CartScrollBar from './Components/CartScrollBar'
import NewArrivals from './Components/NewArrivals'
import SpecialOffers from './Components/SpecialOffers'
import BlogInfoScroller from './Components/BlogInfoScroller'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'
function App() {

  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <FeaturesStrip/>
      <Products/>
      <CartScrollBar/>
      <NewArrivals/>
      <SpecialOffers/>
      <BlogInfoScroller/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
