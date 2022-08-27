import React,{useState} from 'react';
import  './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import logo from '../Images/HELPIFY.png'


const Header = () => {
  const [open, setOpen] = useState(false);


  return (
      <>
        <div className='header'>
            <nav>
              <div className='header__logo'>
              <a href='/'>
                <img src={logo} alt='logo' />
                <h2>Helpify</h2>
              </a>
              </div>
              <div className='header_links'>
                    <ul >
                    <li>
                      <a href='/' >Home</a>
                      <a href='/products'>Products</a>
                      <a href='/rides'>Ride/Help </a>
                      <a href='/jobs'>Shift/Jobs </a>
                      <a href='/pg'>Rooms/PG </a>
                    </li>
                    </ul>
              </div>
              <div className='profile_icon'  onClick={() => setOpen(!open)}>
                <PersonIcon className='profile__icon' />
              </div>
            </nav>
          </div>
        <div className={open ? 'header_links_sm': 'header_links_sm_close'}>
              <ul >
              <li>
                <a href='/' >Home</a>
                <a href='/products'>Products</a>
                <a href='/rides'>Ride/Help </a>
                <a href='/jobs'>Shift/Jobs </a>
                <a href='/pg'>Rooms/PG </a>
              </li>
              </ul>
          </div>
      </>
  )
}

export default Header