import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5b5979] text-white py-4 text-center mt-auto">
      <div className="container mx-auto">
        <p className="text-sm mb-2">&copy; 2024 MANI. All rights reserved.</p>
        
        <nav className="mb-4">
          <a href="#" className="hover:text-[#FFD700] mx-2">Contact Us</a>
          <a href="#" className="hover:text-[#FFD700] mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-[#FFD700] mx-2">Terms of Service</a>
        </nav>
        
        <div className="flex justify-center mt-2">
          <a href="#" className="text-[#FFD700] mx-2 hover:text-[#FFB700]">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-[#FFD700] mx-2 hover:text-[#FFB700]">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-[#FFD700] mx-2 hover:text-[#FFB700]">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;