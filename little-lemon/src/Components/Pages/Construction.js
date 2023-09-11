import React from 'react'
import './Styles/construction.css'
import { MdConstruction } from 'react-icons/md';

const Construction = () => {
  return (
    <div className='construction-grid-system'>
        <MdConstruction className='construction-icon'/>
        <p>
            Page under construction
        </p>
    </div>
  )
}

export default Construction