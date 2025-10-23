import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'


function App() {

  return (
    <>
    <div className='bg-slate-200 h-screen'>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
    </>
  )
}

export default App
