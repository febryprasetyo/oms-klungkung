import React from 'react';
import Logo from '../assets/logo-fastpec.png';

const NavbarTop = () => {
  return (
    <div>
      <div className='bg-blue-bar'>
        <div className='relative flex h-16 items-center justify-between mx-44'>
          <div>
            <img
              className=' h-8 w-auto lg:block md:justify-center'
              src={Logo}
              alt='Your Company'
            />
          </div>
          <div>
            <p className='text-white hidden lg:block uppercase font-bold'>
              Online Monitoring System
            </p>
          </div>
          <div>
            <p className='text-white hidden lg:block font-bold'>
              DLH Klungkung
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
