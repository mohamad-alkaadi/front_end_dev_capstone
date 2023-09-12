import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/Pages/About';
import Menu from './Components/Pages/Menu';
import Reservations from './Components/Pages/Reservations/Reservations'
import Order from './Components/Pages/Order'
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home/Home';
import { Route, Routes, useLocation } from "react-router-dom"


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path='/front_end_dev_capstone/' element={<Home/>}/>
          <Route path='/front_end_dev_capstone/about' element={<About/>}/>
          <Route path='/front_end_dev_capstone/menu' element={<Menu/>}/>
          <Route path='/front_end_dev_capstone/reservations' element={<Reservations/>}/>
          <Route path='/front_end_dev_capstone/order' element={<Order/>}/>
          <Route path='/front_end_dev_capstone/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
