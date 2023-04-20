import React from 'react'
import Slider from './Slider'
import Services from './Services'
import Callbar from './Callbar'

const Home = () => {
  return (
    <div className='HomeContainer'>
      <Slider/>
      <Services/>
      <Callbar/>
    </div>
  )
}

export default Home