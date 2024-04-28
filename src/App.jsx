
import { Outlet } from 'react-router-dom'
import RootLayout from './components/Layouts/RootLayout'
import './index.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <RootLayout/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
