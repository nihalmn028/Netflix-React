import React from 'react'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='nav'>

      
      <div className='navleft'>
      <img className='navlogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
   <Link to={'/'} style={{textDecoration:"none",color:"white"}}>  <p >Home</p></Link> 
      <p>TV Shows</p>
      <p>Movies</p>
      <p>Recently Added</p>
      <p>My List</p>
        </div>
        <div className='navright'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Kids</p>
        <p>DVD</p>
        <i class="fa-sharp fa-regular fa-bell"></i>
        <img style={{width:"30px"}} src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />

        </div>
      </div>
    </div> 
  )
}

export default Navbar