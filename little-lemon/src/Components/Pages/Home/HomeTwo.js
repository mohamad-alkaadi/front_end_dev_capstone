import React from 'react'
import { RiEBike2Fill} from 'react-icons/ri';
import bruchetta from '../Assets/bruchetta.svg'
import lemon from '../Assets/lemon-dessert.jpg'
import greek from '../Assets/greek-salad.jpg'
import '../Styles/hometwo.css'
const HomeTwo = () => {
  return (
    <main className='main-grid-system'>
      <div className='main-title-container'>
        <p>This weeks specials!</p>
        <a>Online Menu</a>
      </div>
      
        <div className='main-card-one main-card'>
            <div>
            <div className='card-img-container'>
                <img src={greek}/>
            </div>
            <div className='main-card-titleAndPrice'>
            <h3 className='main-card-title'>greek salad</h3>
            <h3 className='main-card-price'>$12.99</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutons</p>
            <a className='main-card-button'>Order a delivery {<RiEBike2Fill/>}</a>
            </div>
        </div>
        <div className='main-card-two main-card'>
            <div>
            <div className='card-img-container'>
                <img src={bruchetta}/>
            </div>
            <div className='main-card-titleAndPrice'>
            <h3 className='main-card-title'>Bruchetta</h3>
            <h3 className='main-card-price'>$5.99</h3>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and oliv oil.</p>
            <br/>
            <a className='main-card-button'>Order a delivery {<RiEBike2Fill/>}</a>
            </div>
        </div>
        <div className='main-card-three main-card'>
            <div>
            <div className='card-img-container'>
                <img src={lemon}/>
            </div>
            <div className='main-card-titleAndPrice'>
            <h3 className='main-card-title'>Lemon Dessert</h3>
            <h3 className='main-card-price'>$5.00</h3>
            </div>
            <p>This comes straight from granma's recipe book. every last ingredient has been sourced and is as authentic as can be imagined</p>
            <a className='main-card-button'>Order a delivery {<RiEBike2Fill/>}</a>
            </div>
        </div>
    </main>
  )
}

export default HomeTwo