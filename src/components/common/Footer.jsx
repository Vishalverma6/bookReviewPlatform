import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold">Book Review Platform</h2>
        <p className="text-sm text-gray-400 mt-2">Discover and share your thoughts on your favorite books.</p>
        
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Book Review Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
