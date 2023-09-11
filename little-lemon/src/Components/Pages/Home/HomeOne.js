import React from 'react'
import homeOnePic from '../Assets/restauranfood.jpg'
import '../Styles/homeone.css'
const HomeOne = () => {
  return (
    <header className='header-grid-system'>
      <div className='header-sec-one'>
        <h1>Little Lemon</h1>
        <h2>chicago</h2>
        <p>we are a family owned Mediterranean restaurant focused on traditional recipes on traditional recipes served with a modern twist</p>
        <a role='button'>Reserve a Table</a>
      </div>
      <div className='header-sec-two'>
        <div className='header-img-container'>
          <img src={homeOnePic} alt='this is a photo'/>
        </div>
      </div>
    </header>
  )
}

export default HomeOne