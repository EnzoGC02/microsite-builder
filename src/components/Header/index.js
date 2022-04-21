import React from 'react';
import Logo from '../../assets/img/logo.png';
import { GoHome } from 'react-icons/go';
import { auth } from '../Firebase';

const HeaderComponent = () => {
  const name =
    localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
  const handleLogout = (e) => {
    e.preventDefault();
    auth.signOut();
    localStorage.clear();
    window.location.replace('/');
  };
  return (
    <>
      <div className='header'>
        <div className='logoWrap'>
          <a href='/home' className='menuItem'>
            <img src={Logo} alt='' className='logo' />
          </a>
        </div>
        <div className='leftMenuWrap'>
          <a href='/home'>
            <GoHome size={24} color='#959595' />
          </a>
        </div>
        <div className='rightMenuWrap'>
          <a href='/profile' style={{ color: '#656565' }} title='Profile'>
            {name}
          </a>
          <span
            onClick={handleLogout}
            className='btn-logout'
            title='Logout'
            style={{ cursor: 'pointer' }}
          >
            <i className='fa fa-sign-out'></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
