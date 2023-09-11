import React from 'react'
import { FaStarHalfAlt, FaStar} from 'react-icons/fa';
import customer1 from '../Assets/customer1.jpg'
import customer2 from '../Assets/customer2.jpg'
import customer3 from '../Assets/customer3.jpg'
import customer4 from '../Assets/customer4.jpg'
import '../Styles/homethree.css'

const HomeThree = () => {
  return (
    <main className='homeThree-grid-system'>
      <div className='homeThree-title-container'>
        <p>What people say about us!</p>
      </div>

        <div className='homeThree-cards-container'>
            <div className='homeThree-card-one homeThree-card'>
                <div className='homeThree-img-container'>
                    <img src={customer1}/>
                </div>
                <h3 className='homeThree-card-title'>Maria Sanchez</h3>
                <div className='homeThree-stars-container'>
                    <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStarHalfAlt className='homeThree-star'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='homeThree-card-two homeThree-card'>
            <div className='homeThree-img-container'>
                    <img src={customer2}/>
                </div>
                <h3 className='homeThree-card-title'>Antony Clifton</h3>
                <div className='homeThree-stars-container'>
                    <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='homeThree-card-three homeThree-card'>
                <div className='homeThree-img-container'>
                    <img src={customer3}/>
                </div>
                <h3 className='homeThree-card-title'>Tamika Jackson</h3>
                <div className='homeThree-stars-container'>
                    <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStarHalfAlt className='homeThree-star'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='homeThree-card-Three homeThree-card'>
                <div className='homeThree-img-container'>
                    <img src={customer4}/>
                </div>
                <h3 className='homeThree-card-title'>Brandon Ming</h3>
                <div className='homeThree-stars-container'>
                    <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/> <FaStar className='homeThree-star'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

        </div>
    </main>
  )
}

export default HomeThree