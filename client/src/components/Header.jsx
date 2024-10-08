import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../icons/logoe.png';

const Header = ({ profilePhoto, setIsLoggedIn, isLoggedIn}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); 
    navigate('/signin'); 
  };

  return (
    <header className='bg-gray-800 shadow'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-4'>
        <Link to='/' className='flex items-center'>
          <img src={logo} alt='Eco RealEstate Logo' className='w-10 h-10 mr-2' />
          <h1 className='text-white text-xl font-bold'>
            Eco RealEstate
          </h1>
        </Link>
        <ul className='flex gap-6 items-center'>
          <Link to='/'>
            <li className='text-white hover:underline cursor-pointer font-semibold'>Home</li>
          </Link>
          {
            !isLoggedIn && <Link to='/signup'>
            <li className='text-white hover:underline cursor-pointer font-semibold'>Sign Up</li>
          </Link>
          }
          <Link to='/profile'>
            <li className='text-white hover:underline cursor-pointer font-semibold'>Profile</li>
          </Link>
          <Link to='/mortgage-calculator'>
            <li className='text-white hover:underline cursor-pointer font-semibold'>Mortgage Calculator</li>
          </Link>
          <Link to='/contact'>
            <li className='text-white hover:underline cursor-pointer font-semibold'>Contact Us</li>
          </Link>
          <button onClick={handleLogout} className='text-white hover:underline cursor-pointer font-semibold'>
            Logout
          </button>
          {profilePhoto && (
            <img src={profilePhoto} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
