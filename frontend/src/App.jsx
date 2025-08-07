import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import AppRouter from './router/router'

function App() {
  
  return (
    <>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App
