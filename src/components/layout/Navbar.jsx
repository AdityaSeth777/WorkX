import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import './styles/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const print = () => window.print();

  const signOut = () => {
    setUser({});
    localStorage.clear();
  };

  return (
    <div>
      <div className='top-nav bg-gray-300 flex justify-between items-center px-2 py-1'>
        <div className='flex items-center'>
          <img
            src={require('assets/chobi.png')}
            className='px-2 h-10'
            alt='WorkX Logo'
          />
        </div>
        <div className='flex m-auto sm:m-0'>
          <button className='mx-2' onClick={print} title='Print this page'>
            <Icon name='print' />
          </button>
          <div id='google_translate_element'></div>
        </div>
      </div>

      <header className='py-3 bg-white flex items-end justify-between'>
        <div className='logo flex items-end text-lg font-bold'>
          <Link to='/' className='ml-3 text-purple-900 hover:text-blue-800'>
            Jobs
          </Link>
          <Link
            to='/dashboard'
            className='ml-3 text-purple-900 hover:text-blue-800'
          >
            Dashboard
          </Link>
          {user.role === 'Employee' && (
            <Link
              to='/recommended'
              className='ml-3 text-purple-900 hover:text-blue-800'
            >
              Recommended Jobs
            </Link>
          )}
          <Link
            to='/courses'
            className='ml-3 text-purple-900 hover:text-blue-800'
          >
            Courses
          </Link>
        </div>

        <input id='nav' type='checkbox' />
        <label htmlFor='nav' />
        <nav className='text-lg'>
          <ul>
            <li>
              {user.username && user.role === 'Employer' ? (
                <Link
                  to='/createJob'
                  className='sm:mr-3 font-bold text-purple-800 hover:text-purple-900'
                >
                  Post Job
                </Link>
              ) : null}
            </li>
            <li>
              {user.username ? (
                <button className='profile-button'>
                  <span className='uppercase font-bold text-purple-800'>
                    {user.username}
                  </span>
                  &nbsp;
                  <Icon style={{ display: 'inline' }} name='down-arrow' />
                  <ul className='flex flex-col py-6 px-6'>
                    <li className='text-sm hover:text-purple-800'>
                      <Link
                        to={
                          user.role === 'Employee'
                            ? `/profile/${user.username}`
                            : `/org/${user.username}`
                        }
                      >
                        Profile
                      </Link>
                    </li>
                    <li className='text-sm hover:text-purple-800'>
                      <Link to='/updateProfile'>Edit Profile</Link>
                    </li>
                    <li
                      className='text-sm hover:text-purple-800'
                      onClick={signOut}
                    >
                      Sign Out
                    </li>
                  </ul>
                </button>
              ) : (
                <>
                  <Link
                    to='/signup'
                    className='sm:mr-3 font-bold text-purple-800 hover:text-purple-900'
                  >
                    SignUp
                  </Link>
                  <Link
                    to='/login'
                    className='sm:mr-3 font-bold text-purple-800 hover:text-purple-900'
                  >
                    Login
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
