import React, { useState } from 'react';
import cbe from '../assets/cbe.png';
import telebirr from '../assets/telebirr.png';
import image from '../assets/4.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Details() {
  const [copySuccess, setCopySuccess] = useState('');
  const [copyType, setCopyType] = useState('');
  const phoneNumber = '+251962719768';
  const bankAccount = '1000476341292';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Copied!');
        setCopyType(type);
        setTimeout(() => {
          setCopySuccess('');
          setCopyType('');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={image}
        alt="Restaurant Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div id="Details" className="relative flex flex-col items-center justify-center h-full p-4">
        <div className="flex flex-wrap justify-around items-start w-full max-w-4xl p-4 space-y-6 sm:space-y-0">
          {/* CBE Section */}
          <div className="flex flex-col items-center text-center w-full sm:w-5/12">
            <div className='flex justify-center items-center'>
              <img src={cbe} alt="CBE Logo" className='h-[10vh] sm:h-[12vh] w-auto max-w-full' />
            </div>
            <p className='text-lg sm:text-xl font-bold text-white mt-2'>CBE</p>
            <p className='text-base sm:text-lg font-semibold text-white'>Surafel Getnet</p>

            <div className='flex items-center justify-center mt-1'>
              <p className='text-base sm:text-lg font-semibold text-white'>{bankAccount}</p>
              <button 
                onClick={() => handleCopy(bankAccount, 'bankAccount')} 
                className="ml-2 pb-2 text-white rounded hover:text-blue-600 transition"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
            {copyType === 'bankAccount' && <span className="ml-2 text-gray-100">{copySuccess}</span>}
          </div>

          {/* Telebirr Section */}
          <div className="flex flex-col items-center text-center w-full sm:w-5/12">
            <div className='flex justify-center items-center'>
              <img src={telebirr} alt="Telebirr Logo" className='h-[10vh] sm:h-[12vh] w-auto max-w-full' />
            </div>
            <p className='text-lg sm:text-xl font-bold text-white mt-2'>Telebirr</p>
            <p className='text-base sm:text-lg font-semibold text-white'>Surafel Getnet</p>

            <div className='flex items-center justify-center mt-1'>
              <p className='text-base sm:text-lg font-semibold text-white'>{phoneNumber}</p>
              <button 
                onClick={() => handleCopy(phoneNumber, 'phoneNumber')} 
                className="ml-2 pb-2 text-white rounded hover:text-blue-600 transition"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
            {copyType === 'phoneNumber' && <span className="ml-2 text-white">{copySuccess}</span>}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center bg-gray-500 bg-opacity-40 p-4 rounded-lg shadow-lg mx-4 mt-6 z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-2">Order and Payment</h2>
          <p className="text-sm sm:text-base text-center text-white mb-2">
            You can call us to place your order. After payment, please send the screenshot to the following number or reach out to us on Telegram <em>@getsura</em>.
          </p>
          <p className="text-base sm:text-lg font-semibold text-white mb-2">{phoneNumber}</p>
          <p className="text-sm sm:text-base text-center text-white">
            Thank you for your business!
          </p>
          
        </div>

       
      </div>
    </div>
  );
}

export default Details;