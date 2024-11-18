import React from 'react'
import '../CssComponents/Navbar.css'
import { Link } from 'react-router-dom'
import About from './About';

const NavBar = () => {

    
  return (
 <>
<div className="container">
    <div className="left">
        <ul><li><Link to='/Home' className='link_color'>Logo</Link></li> </ul>
    </div>
    <div className="centre">
        <ul className='name'><li><Link to='/Home' className='link_color'>Home</Link></li>
            <li><Link to='/About'className='link_color'>About</Link></li>
            <li><Link to='/Doc' className='link_color'>Doc</Link></li>
            <li><Link to='/UserDetails' className='link_color'>UserDetals</Link></li>
            <li><Link to='/AddAdvertiser' className='link_color'>Add Advertiser</Link></li>
        </ul>
    </div>
    <div className="right">
        <ul> <li><button className='btn clr_white'><Link to='/SignUp' className='clr_white'>SignUp</Link></button></li>
            <li><button className='btn clr_white'><Link to='/Login' className='clr_white'>LogIn</Link></button></li>
        </ul>
    </div>
</div>
 </>
  )
}

export default NavBar
