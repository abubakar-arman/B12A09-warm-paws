import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className='bg-slate-200 h-screen'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
    </>
  )
}

export default App
