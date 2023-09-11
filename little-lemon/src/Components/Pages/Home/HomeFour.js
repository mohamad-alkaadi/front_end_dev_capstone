import React from 'react'
import chefs1 from '../Assets/MarioandAdrianA.jpg'
import chefs2 from '../Assets/MarioandAdrianb.jpg'
import '../Styles/homefour.css'
const HomeFour = () => {
  return (
    <main className='homeFour-grid-system'>
        <div className='homeFour-HalfOne-container'>
            <div className='homeFour-title'>
                <p>Little Lemon<br/><span>Chicago</span></p>
            </div>
            <div className='homeFour-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
        </div>
        <div className='homeFour-HalfTwo-container'>
            <img className='homeFour-img homeFour-img-one' src={chefs1} width={465}/>
            <img className='homeFour-img homeFour-img-two' src={chefs2} width={465}/>
        </div>
    </main>
  )
}

export default HomeFour