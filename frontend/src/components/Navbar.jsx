import React from 'react';

function Navbar() {
  return (
    <div className='bg-transparent z-10 fixed w-full h-[3.5em] flex justify-between items-center p-10'>
      <h1 className='text-white text-2xl font-bold'>ራስ ግዕዝ</h1>
      <ul className='flex gap-10'>
        <li className=' text-white hover:text-rose-600 transition-colors'>
          <a href="#Menu">Home</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#About">About Us</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#Details">Order Us</a>
        </li>
        <li className='text-white hover:text-rose-600 transition-colors'>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;