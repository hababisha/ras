import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 sm:p-6">
      
      <div className="mt-16 sm:mt-[3.5em] bg-blue-900 shadow-lg rounded-lg p-4 sm:p-8 w-full max-w-lg">
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 sm:mt-8 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">Get in Touch</h2>
        <p className="text-gray-200 text-sm sm:text-base">You can reach us at:</p>
        <p className="text-gray-200 text-sm sm:text-base">Phone: +251 962719768</p>
        <p className="text-gray-200 text-sm sm:text-base">Email: surafelgetnet@gmail.com</p>
        <p className="text-gray-200 text-sm sm:text-base">Address: አኮቴት ፕሪ ት/ቤት ፊትለፊት, Bahirdar, Ethiopia</p>
      </div>
    </div>
  );
};

export default Contact;