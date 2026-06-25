import React from 'react'
import { Navigation } from './Navigation'
import Plane from './Plane'

const Header = () => {
  return (
    <div className='Header'>
      <Navigation/>
      <Plane/>
    </div>
  )
}

export default Header