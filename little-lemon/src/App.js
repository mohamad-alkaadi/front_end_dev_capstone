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
          <Route path='' element={<Home/>}/>
          <Route path='/front_end_dev_capstone/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
