import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      
      <div className="mt-[3.5em] bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h2>
        <p className="text-gray-200">You can reach us at:</p>
        <p className="text-gray-200">Phone: +251 962719768</p>
        <p className="text-gray-200">Email: surafelgetnet@gmail.com</p>
        <p className="text-gray-200">Address: አኮቴት ፕሪ ት/ቤት ፊትለፊት , Bahirdar, Ethiopia</p>
      </div>
    </div>
  );
};

export default Contact;