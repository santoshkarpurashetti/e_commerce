import React from 'react'
import FlipkartAdv from './FlipkartAdv'
import Amezonadv from './Amezonadv'
import JioMartadv from './JioMartadv'
import Myntraadv from './Myntraadv'


const Home = () => {
  return (
    <>
  <div className=''>
    <div className="home_page">
      <div className="classification"></div>
      <div className="flex-box-container">
        <div className="flex-box-right">
        <FlipkartAdv/>
        <JioMartadv/>
        </div>
        <div className="flex-box-left">
        <Amezonadv/>
        <Myntraadv/>
        </div>

     
     

      
      </div>
     
      
    </div>

  </div>
    </>
  )
}

export default Home
