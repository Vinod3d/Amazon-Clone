import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
import Maincomp from './components/home/Maincomp'
import Newnav from './components/newnavbar/Newnav'
import SignUp from './components/signup_signin/SignUp'
import Sign_in from './components/signup_signin/Sign_in'
import Cart from './components/cart/Cart'
import Buynow from './components/buynow/Buynow'

function App() {

  return (
    <>
      <Navbar/>
      <Newnav/>
      <Routes>
          <Route path='/' element={<Maincomp/>}/>
          <Route path='/login' element={<Sign_in/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/getproductsone/:id' element={<Cart/>}/>
          <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
