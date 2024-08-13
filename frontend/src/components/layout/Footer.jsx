import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import './styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='main-footer'>
        <div className='my-2'>
          <div className='flex mb-1'>
            <img
              src={require('assets/chobi.png')}
              className='px-2 h-10'
              alt='WorkX Logo'
            />
          </div>
          <div className='flex'>
            <Link to='/'>
              <Icon name='instagram' />
            </Link>

            <Link to='/'>
              <Icon name='facebook' />
            </Link>

            <Link to='/'>
              <Icon name='twitter' />
            </Link>
          </div>
        </div>
        <div className='footer-links'>
          <Link to='/'>Find Jobs</Link>
          <Link to='/createJob'>Post Job</Link>
        </div>
      </div>
      <div className='copyright-bar bg-purple-800'>
        <h6 className='text-sm'>@2024 Babus. All Rights Reserved.</h6>
        <div>
          <Link to='/'>Contact us</Link>
          <Link to='/'>Provide feedback</Link>
          <Link to='/'>Jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
