import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-transparent z-10 fixed w-full h-[3.5em] flex justify-between items-center p-10'>
      <h1 className='text-white text-2xl font-bold'>ራስ ጌዝ</h1>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          {/* Hamburger Icon */}
          <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul className={`flex-col md:flex md:flex-row gap-10 absolute md:static bg-transparent md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-[3.5em] right-0 w-full' : 'top-[-200px]'}`}>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#Menu" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#About" onClick={() => setIsOpen(false)}>About Us</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#Details" onClick={() => setIsOpen(false)}>Order Us</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;