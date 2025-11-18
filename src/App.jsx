import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import FeaturedCarousel from './components/FeaturedCarousel'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProps />
      <FeaturedCarousel />
      <Waitlist />
      <Footer />
    </div>
  )
}

export default App
