import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import Logo from '../../assets/myLogo.png';
import subLogo from '../../assets/herbertKen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

//TODO
//add my custom icon logo in here
function Sidebar() {
  return (
    <div className='navBar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
            <img src={subLogo} alt='subLogo' className='subLogo'/>
        </Link>
        <nav>
          <NavLink exact={true} activeClassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact={true} activeClassname='active' to='/about' className='about-link'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact={true} activeClassname='active' to='/contact' className='contact-link'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
    </div>
  )
}

export default Sidebar