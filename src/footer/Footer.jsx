import React from 'react';
import footer_img from '../assets/logo-footer.png'
import Newsletter from './newsletter';
const Footer = () => {
    return (
        <div className='relative'>
            <Newsletter></Newsletter>
            
            <footer className="pt-24 bg-gray-800 text-white  px-4">
            <div className='flex justify-center'>
                <img src={footer_img} alt="" />
            </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-gray-300">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Subscribe</h3>
          <p className="text-gray-300">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;