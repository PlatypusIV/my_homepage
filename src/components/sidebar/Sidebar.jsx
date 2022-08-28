import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

//TODO
//add my custom icon logo in here
function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src='' />
        </Link>
    </div>
  )
}

export default Sidebar