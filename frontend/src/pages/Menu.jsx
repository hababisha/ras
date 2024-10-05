import React from 'react';
import img from '../assets/4.jpg';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function Menu() {
  // const navigate = useNavigate();

  // const handleContactClick = () => {
  //   navigate('#'); // Navigate to the Contact Us page
  // };

  return (
    <div id='Menu' className='relative h-screen flex justify-center items-center'>
      <div className=" relative w-full h-screen overflow-hidden">
       
        <img
          src={img} 
          alt="Restaurant Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60">

        </div>
        <div className="relative flex items-center justify-center h-full text-white">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Ras GeZ</h1>
            <p className="text-lg md:text-xl">The Best Restaurant in Bahirdar, Ethiopia</p>
            
              <a  href="#Contact"  className=" mt-6 inline-block z-10 relative  px-6 py-2 text-lg font-semibold text-white bg-blue-900 rounded-md shadow-xl hover:bg-white hover:border-blue-900 hover:text-black hover:border-2">
                  Contact Us
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;